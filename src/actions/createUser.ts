import { auth } from "@clerk/nextjs/server";
import { neon } from "@neondatabase/serverless";
import { Pool } from "pg";

interface ClerkUser {
  id: string;
  first_name: string;
  last_name: string;
  email_addresses: { email_address: string }[];
  created_at: string;
}

export async function createUserAction() {
  "use server";

  const { userId } = auth();
  if (!userId) {
    return { error: "Unauthorized" };
  }

  try {
    const pool: Pool = neon(process.env.DATABASE_URL);

    const clerkUser: ClerkUser = await fetch(
      `https://api.clerk.dev/v1/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
        },
      }
    ).then((res) => res.json());

    const existingUser = await pool.query("SELECT id FROM user WHERE id = $1", [
      userId,
    ]);

    if (existingUser.rows.length > 0) {
      return { success: true, message: "User already exists" };
    }

    const userToSave = {
      id: clerkUser.id,
      fullname: clerkUser.first_name + " " + clerkUser.last_name || null,
      email: clerkUser.email_addresses[0].email_address || null,
      created_at: new Date(clerkUser.created_at),
    };

    const result = await pool.query(
      `INSERT INTO user (id, fullname, email, created_at)
      VALUES ($1, $2, $3, $4)`,
      [
        userToSave.id,
        userToSave.fullname,
        userToSave.email,
        userToSave.created_at,
      ]
    );

    await pool.end();

    return { success: true, message: "User created successfully" };
  } catch (error: any) {
    console.error("Error creating user:", error);
    return { error: "Failed to create user", details: error.message };
  }
}

import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const user = await currentUser();

  if (user) {
    redirect("/dashboard");
  }

  return <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>;
}

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <SignIn
        appearance={{
          elements: {
            rootBox: "shadow-none",
            card: "shadow-lg border border-gray-200",
          },
        }}
      />
    </div>
  );
}

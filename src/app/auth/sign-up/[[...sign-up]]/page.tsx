import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { SignUp } from "@clerk/nextjs";

export default function Page() {
  const isSignedUp = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedUp) {
      router.push("/dashboard");
    }
  }, [isSignedUp]);

  return <SignUp />;
}

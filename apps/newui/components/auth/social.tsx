"use client";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
export const Social = () => {
  const onClick = (provider: "google" | "linkedin") => {
    signIn(provider, { callbackUrl: "http://localhost:3000/profile" });
  };
  return (
    <div className="flex items-center w-full gap-y-4 ">
      <Button
        size="lg"
        className="w-full rounded-md "
        variant="outline"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="h-6 w-6 " />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("linkedin")}
      >
        <FaLinkedin className="h-6 w-6 " />
      </Button>
    </div>
  );
};

"use client";
import { Button } from "components/ui/button";
import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Logout = () => {
  let router = useRouter();
  return (
    <Button
      className="bg-bluebg hover:bg-slate-900"
      onClick={() => {
        // router.push("/");W
        signOut();
      }}
    >
      Logout
    </Button>
  );
};

export default Logout;

"use client";
import Profile, { ProfileProps } from "@/components/Profile";
import Skills from "@/components/Skills";
import { useSession } from "next-auth/react";
import React from "react";

const page = () => {
  const { data: session } = useSession();

  const user: ProfileProps = {
    image: session?.user?.image || "",
    name: session?.user?.name || "Sam Altman",

    passoutyear: 2020,
    Department: "IT",
    Heading: "Web Dev",

    alumni: true,
    skills: ["javascript", "React", "react"],
    expertise: [
      "Frontend Development",
      "Full Stack Development",
      "Frontend Development",
      "Frontend Development",
    ],
  };
  return (
    <div className=" w-full rounded-xl flex flex-col items-center  gap-5 h-full">
      <Profile {...user} />
    </div>
  );
};

export default page;

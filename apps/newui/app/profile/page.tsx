import Profile, { ProfileProps } from "@/components/Profile";
import Skills from "@/components/Skills";
import React from "react";
const user: ProfileProps = {
  image: "/Image.png",
  name: "Sam Altman",

  passoutyear: 2020,
  Domain: "IT",
  Heading: "Web Dev",

  alumni: true,
  skills: [
    "javascript",
    "React",
    "react",
    "javascript",
    "React",
    "react",
    "javascript",
    "React",
    "react",
  ],
  expertise: [
    "Frontend Development",
    "Full Stack Development",
    "Frontend Development",
    "Frontend Development",
  ],
};

const page = () => {
  return (
    <div className=" w-full  m-5 rounded-xl flex flex-col items-center gap-5">
      <Profile {...user} />
    </div>
  );
};

export default page;

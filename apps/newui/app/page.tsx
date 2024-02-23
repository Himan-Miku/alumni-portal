import CreateThread from "@/components/CreateThread";
import StudentsThreads from "@/components/StudentsThreads";
import React from "react";

const page = () => {
  return (
    <div className=" mx-4 grid grid-cols-10 w-full">
      <div className="col-span-10 lg:col-span-7 flex flex-col gap-4 w-full ">
        <CreateThread></CreateThread>
        <StudentsThreads></StudentsThreads>
      </div>
      <div className="hidden lg:block col-span-3"></div>
    </div>
  );
};

export default page;

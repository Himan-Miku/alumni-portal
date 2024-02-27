import CreateThread from "@/components/CreateThread";
import SelectOptions from "@/components/SelectOptions";
import StudentsThreads from "@/components/StudentsThreads";
import React from "react";

const page = () => {
  return (
    <div className="my-5 mx-6 grid grid-cols-10 gap-6 w-full">
      <div className="col-span-10 lg:col-span-7 flex flex-col gap-4 w-full ">
        <CreateThread></CreateThread>
        <StudentsThreads></StudentsThreads>
      </div>
      <div className="hidden lg:block col-span-3">
        <SelectOptions></SelectOptions>
      </div>
    </div>
  );
};

export default page;

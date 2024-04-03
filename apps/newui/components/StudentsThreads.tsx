import React from "react";
import Thread from "./Thread";
import { RxCross2 } from "react-icons/rx";
import { Button } from "./ui/button";

const StudentsThreads = () => {
  let tags = ["All", "Job Opportunities", "Achievements"];

  return (
    <div className="bg-white flex flex-col gap-2 shadow p-4 rounded-xl">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold tracking-wide">Student Threads</h1>
        <div className="flex gap-4 flex-wrap">
          {tags?.map((ele, ind) => {
            return (
              <span
                key={ind}
                className="bg-text_bg text-sm shadow py-1 px-3 rounded-md flex  items-center justify-between gap-2 cursor-pointer font-semibold"
              >
                {ele + " "}
                <RxCross2></RxCross2>
              </span>
            );
          })}
        </div>
        <div className="w-full h-[1px] bg-slate-400"></div>
      </div>
      <div className="threads flex flex-col gap-4 pt-3">
        <Thread></Thread>
        <hr></hr>
        <Thread></Thread>
      </div>
      <hr className="mt-4"></hr>
      <div className="grid place-content-center">
        <Button
          variant={"ghost"}
          className="text-lg text-blue-500 font-semibold hover:text-blue-500"
        >
          Load More Threads
        </Button>
      </div>
    </div>
  );
};

export default StudentsThreads;

import React from "react";

const StudentsThreads = () => {
  let tags = ["All", "Job Opportunities", "Achievements"];

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">Student Threads</h1>
        <div className="flex gap-4">
          {tags?.map((ele) => {
            return (
              <span className="bg-slate-400 py-1 px-3 rounded-md">
                {ele + " "}
              </span>
            );
          })}
        </div>
        <div className="w-full h-[1px] bg-slate-400"></div>
      </div>
      <div className="threads">
        
      </div>
    </div>
  );
};

export default StudentsThreads;

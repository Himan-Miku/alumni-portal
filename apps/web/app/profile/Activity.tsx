import Feed from "app/components/Feed";
import { Button } from "components/ui/button";
import React from "react";

const Activity = () => {
  return (
    <div className="bg-white p-5 flex flex-col items-start gap-3 shadow-sm rounded-sm ">
      <div>
        <div className="text-medgray text-xl font-bold">Activities</div>
        <div className="text-blue-400 font-semibold text-sm ">
          1928 Followers
        </div>
      </div>
      <Button className="bg-bluebg text-xs rounded-3xl h-9">Refresh</Button>
      <div className="flex flex-col gap-2 ">
        <Feed></Feed>
        <Feed></Feed>
      </div>
      <Button className="w-full bg-slate-500">Show more</Button>
    </div>
  );
};

export default Activity;

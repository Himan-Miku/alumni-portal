import React from "react";
import SearchUtility from "./SearchUtility";
import Feed from "./Feed";

const MainFeed = () => {
  return (
    <>
      <div className=" lg:col-start-4 row-span-3 col-span-4 flex flex-col gap-2 lg:gap-3 ">
        <SearchUtility></SearchUtility>
        <Feed />
        <Feed />
        {/* <div className="w-full h-20 testing "> hii</div> */}
      </div>
    </>
  );
};

export default MainFeed;

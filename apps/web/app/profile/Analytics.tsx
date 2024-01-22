import React from "react";
import { IoIosEye } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import { SiGoogleanalytics } from "react-icons/si";
import { IoSearchSharp } from "react-icons/io5";
import { Button } from "shadcn/ui/button";
import { FaArrowRight } from "react-icons/fa";

const Analytics = () => {
  return (
    <div className="bg-white rounded-sm pt-4 px-4 pb-2 flex flex-col gap-2 md:gap-3 shadow-sm">
      <div className="text-lightgray font-semibold">
        <div className="text-graytext">Analytics</div>
        <div className="flex gap-1 items-center text-xs">
          <IoIosEye></IoIosEye>Private to you
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-2">
        <div className="analytics-card ">
          <BsFillPeopleFill size={20}></BsFillPeopleFill>
          <div className="card-text">
            <div className="text-head">21 Profile Views</div>
            <div>Discover who's viewed your profile</div>
          </div>
        </div>
        <div className="analytics-card">
          <SiGoogleanalytics size={20}></SiGoogleanalytics>
          <div className="card-text">
            <div className="text-head">661 post impressions</div>
            <div>Check out who is engaged in your posts</div>
          </div>
        </div>
        <div className="analytics-card">
          <IoSearchSharp size={20}></IoSearchSharp>
          <div className="card-text">
            <div className="text-head">37 Search Appearances</div>
            <div>See how often you appeaar in search results</div>
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] bg-slate-300"></div>
      <Button variant={"ghost"}>
        <div className="text-lightgray font-semibold flex items-center gap-2 ">
          <div className="text-base">Show All Analytics</div>
          <FaArrowRight size={20}></FaArrowRight>
        </div>
      </Button>
    </div>
  );
};

export default Analytics;

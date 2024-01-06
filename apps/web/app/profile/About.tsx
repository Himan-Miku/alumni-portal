import React from "react";
import { MdInfo } from "react-icons/md";
import { ImOffice } from "react-icons/im";
import { IoIosBook } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { Button } from "components/ui/button";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogInput } from "app/components/Dialog";

const About = () => {
  let data = {
    about:
      " Hi I am Sushant Rao I am a Passionate Full Stack Developer Currently working on High End projects and Exploring new Tech",
    exp: [
      {
        name: "Oasis Infobytes Pvt.Ltd -Dubai",
        role: "Associate Software Developer",
        duration: "2022-present",
      },
      {
        name: "NextWave Tech Pvt. Ltd - Tathawade",
        role: "Frontend Developer",
        duration: "2021-2022",
      },
    ],
    qual: [
      {
        stream: "Btech in Information Technology",
        college: "JSPM Rajashri Shahu College Of Engineering - Tathawade",
        marks: "85.20 %",
        duration: "2017-2021",
      },
      {
        stream: "12th Science",
        college: "Ascc rahuri",
        marks: "83.00 %",
        duration: "2016-2017",
      },
    ],
  };
  return (
    <div className="bg-white flex flex-col gap-5 pb-3 shadow-sm rounded-sm">
      <div className="flex gap-1 flex-col pt-2 px-6">
        <div className="about-heading">
          <MdInfo size={25}></MdInfo>
          <span className="text-xl ">About</span>
        </div>
        <div className="mx-7 text-md font-semibold text-lightgray">
          {data?.about}
        </div>
      </div>
      <div className="w-full h-[.1px] bg-slate-400"></div>
      <div className=" px-6">
        <div className="flex justify-between">
          <div className="about-heading gap-2 mb-2">
            <ImOffice size={23}></ImOffice>
            <span className="text-xl ">Work Experience</span>
          </div>
          <DialogInput
            dialogRole="exp"
            buttonName=""
            buttoncss="rounded-3xl text-lightgray text-lg"
          />
        </div>
        <div className="about-flex">
          {data?.exp?.map((elem, ind) => {
            return (
              <div key={ind} className="about-card">
                <div className="flex flex-col font-semibold">
                  <div className="text-lg ">{elem?.role}</div>
                  <div className="text-lightgray text-sm max-w-[90%] ">
                    {elem?.name}
                  </div>
                </div>
                <div className="text-sm font-semibold text-lightgray">
                  {elem?.duration}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-[.1px] bg-slate-400"></div>
      <div className=" px-6">
        <div className="flex justify-between">
          <div className="about-heading gap-2 mb-2">
            <IoIosBook size={25}></IoIosBook>
            <span className="text-xl">Qualification</span>
          </div>
          <DialogInput
            dialogRole="qual"
            buttonName=""
            buttoncss="rounded-3xl text-lightgray text-lg"
          />
        </div>
        <div className="about-flex">
          {data?.qual.map((elem, ind) => {
            return (
              <div key={ind} className="about-card">
                <div className="flex flex-col font-semibold">
                  <div className="text-lg">{elem?.stream}</div>
                  <div className="text-lightgray text-sm max-w-[90%] ">
                    {elem?.college}
                  </div>
                </div>
                <div className=" font-semibold text-lightgray flex flex-col gap-[1px]">
                  <div className="text-sm">{elem?.marks}</div>
                  <div className="text-xs">{elem?.duration}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;

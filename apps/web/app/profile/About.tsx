import React from "react";
import { MdInfo } from "react-icons/md";
import { ImOffice } from "react-icons/im";
import { IoIosBook } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { Button } from "components/ui/button";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogInput } from "app/components/Dialog";
import { User } from "app/types";

interface prop {
  User: {
    about?: string;

    education?: [
      {
        studyfrom: String;
        studied: String;
        duration: String;
        percentage: String;
      },
    ];
    work?: [
      {
        company: String;
        position: String;
        duration: String;
      },
    ];
  };
}

const About = (Prop: prop) => {
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
  // console.log(Prop);
  return (
    <div className="bg-white flex flex-col gap-5 pb-3 shadow-sm rounded-sm">
      {Prop?.User?.about && (
        <div className="flex gap-1 flex-col pt-2 px-2 md:px-6">
          <div className="about-heading">
            <MdInfo size={25}></MdInfo>
            <span className=" text-lg md:text-xl ">About</span>
          </div>
          <div className="mx-7 text-md md:text-lg font-semibold text-lightgray">
            {Prop?.User?.about}
          </div>
        </div>
      )}
      <div className="w-full h-[.1px] bg-slate-400"></div>

      <div className=" px-6">
        <div className="flex justify-between">
          <div className="about-heading gap-2 mb-2">
            <ImOffice size={23}></ImOffice>
            <span className="text-lg md:text-xl ">Work Experience</span>
          </div>
          <DialogInput
            dialogRole="exp"
            buttonName=""
            buttoncss="rounded-3xl text-lightgray text-lg"
          />
        </div>
        {!Prop?.User?.work?.length ? (
          <></>
        ) : (
          <div className="about-flex">
            {Prop?.User?.work?.map((elem, ind) => {
              return (
                <div key={ind} className="about-card">
                  <div className="flex flex-col font-semibold">
                    <div className="text-base md:text-lg ">
                      {elem?.position}
                    </div>
                    <div className="text-lightgray text-sm max-w-[90%] ">
                      {elem?.company}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs md:text-sm font-semibold text-lightgray">
                      {elem?.duration}
                    </div>
                    <div></div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="w-full h-[.1px] bg-slate-400"></div>
      <div className=" px-6">
        <div className="flex justify-between">
          <div className="about-heading gap-2 mb-2">
            <IoIosBook size={25}></IoIosBook>
            <span className="text-lg md:text-xl">Qualification</span>
          </div>
          <DialogInput
            userData={{ ...Prop?.User!, name: "", email: "" }}
            dialogRole="qual"
            buttonName=""
            buttoncss="rounded-3xl text-lightgray text-lg"
          />
        </div>
        {!Prop?.User?.education?.length ? (
          <></>
        ) : (
          <div className="about-flex">
            {Prop?.User?.education.map((elem, ind) => {
              return (
                <div key={ind} className="about-card">
                  <div className="flex flex-col font-semibold">
                    <div className="text-base md:text-lg">{elem?.studied}</div>
                    <div className="text-lightgray text-sm max-w-[90%] ">
                      {elem?.studyfrom}
                    </div>
                    <div className="text-xs text-lightgray md:text-sm">
                      {elem?.percentage}
                    </div>
                  </div>
                  <div className=" font-semibold text-lightgray">
                    <div className="text-xs">{elem?.duration}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;

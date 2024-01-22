import React from "react";
import { MdInfo } from "react-icons/md";
import { ImOffice } from "react-icons/im";
import { IoIosBook } from "react-icons/io";

import { DialogInput } from "app/components/Dialog";

interface prop {
  self?: boolean;
  User: {
    about?: string;

    education?: [
      {
        studyfrom: string;
        studied: string;
        duration: string;
        percentage: string;
      },
    ];
    work?: [
      {
        company: string;
        position: string;
        duration: string;
      },
    ];
  };
}

const About = (Prop: prop) => {
  // console.log(Prop);
  return (
    <div className="bg-white w-full flex flex-col gap-5 pb-3 shadow-sm rounded-sm">
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
          {Prop?.self && (
            <DialogInput
              dialogRole="exp"
              buttonName=""
              buttoncss="rounded-3xl text-lightgray text-lg"
            />
          )}
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
                    <div
                      className={` ${
                        Prop?.self ? "text-medgray" : "text-lightgray"
                      } text-sm `}
                    >
                      {elem?.company}
                    </div>
                    {Prop?.self && (
                      <div className="text-xs md:text-sm font-semibold text-lightgray">
                        {elem?.duration}
                      </div>
                    )}
                  </div>
                  {Prop?.self ? (
                    <div className="text-medgray">
                      <DialogInput
                        exp={elem}
                        dialogRole="exp"
                        buttonName=""
                        buttoncss="rounded-3xl text-lightgray text-lg"
                      />
                    </div>
                  ) : (
                    <div className="text-sm  text-medgray">
                      {elem?.duration}
                    </div>
                  )}
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

          {Prop?.self && (
            <DialogInput
              userData={{ ...Prop?.User!, name: "", email: "" }}
              dialogRole="qual"
              buttonName=""
              buttoncss="rounded-3xl text-lightgray text-lg"
            />
          )}
        </div>
        {!Prop?.User?.education?.length ? (
          <></>
        ) : (
          <div className="about-flex">
            {Prop?.User?.education.map((elem, ind) => {
              return (
                <div key={ind} className="about-card">
                  <div className="flex flex-col font-semibold">
                    <div className="text-base md:text-lg">
                      {elem?.studied} : {elem?.percentage}
                    </div>

                    <div
                      className={`${
                        Prop?.self ? "text-medgray" : "text-lightgray"
                      }  text-sm w-full  `}
                    >
                      {elem?.studyfrom}
                    </div>

                    {Prop?.self && (
                      <div className="text-sm text-lightgray">
                        {elem?.duration}
                      </div>
                    )}
                  </div>
                  <div className="  text-medgray">
                    {Prop?.self ? (
                      <DialogInput
                        qual={elem}
                        dialogRole="qual"
                        buttonName=""
                        buttoncss="rounded-3xl text-lightgray text-lg"
                      />
                    ) : (
                      <div className="text-sm text-medgray">
                        {elem?.duration}
                      </div>
                    )}
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

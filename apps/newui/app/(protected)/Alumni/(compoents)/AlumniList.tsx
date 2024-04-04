"use client";
import React, { useState } from "react";
import AlumniCard from "./AlumniCard";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { BiGridAlt } from "react-icons/bi";
import { LuSettings2 } from "react-icons/lu";
 

const AlumniList = () => {
  const [listView, setListView] = useState(false);
  return (
    <>
      <div className="w-full flex justify-around ">
        <div className="flex bg-white m-2 rounded-xl w-full ">
          <Image
            src="/Search.svg"
            alt="Search icon"
            width={20}
            height={20}
            className="m-2 ml-4 border-none"
          ></Image>
          <Input className=" m-2 border-none focus:border-none" ></Input>
        </div>
        <div
          className="flex justify-center items-center bg-white m-2 p-2 rounded-xl "
          onClick={(Lis) => {
            setListView(false);
          }}
        >
          <BiGridAlt className="w-6 h-6 m-2  contrast-[.20]" />
          <h3 className="hidden md:block whitespace-nowrap">List View</h3>
        </div>
        <div className="flex justify-center items-center bg-white m-2 p-2 rounded-xl">
          <LuSettings2 className="w-5 h-5 m-2 brightness-50 contrast-[.2]" />
          <h3 className="hidden md:block">Filters</h3>
        </div>
      </div>

      <div className="m-2 bg-white  rounded-xl ">
        <h2 className="p-2 pl-4">Best results matching your needs</h2>
        <div className="bg-slate-500 h-[1px]  mx-4"></div>
        <div className="flex  gap-1  flex-wrap justify-around mt-5 ">

          <AlumniCard></AlumniCard>
          <AlumniCard></AlumniCard>
          <AlumniCard></AlumniCard>
          <AlumniCard></AlumniCard>
          <AlumniCard></AlumniCard>
          
        </div>
      </div>
    </>
  );
};

export default AlumniList;


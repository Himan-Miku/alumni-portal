"use client";
import React, { useEffect, useState } from "react";
import SingleThread from "./Thread";
import { RxCross2 } from "react-icons/rx";
import LoadThreads from "../components/LoadThreads";
import ThreadSkeleton from "@/components/ThreadSkeleton";
import { Thread } from "@/types/types";
import Axios from "@/app/Axios";

const StudentsThreads = () => {
  let tags = ["All", "Job Opportunities", "Achievements"];
  let [data, setData] = useState<Thread[]>([]);
  let [loading, setLoading] = useState<"Loading" | "Loaded" | "Not Found">(
    "Loading"
  );

  useEffect(() => {
    let fetch = async () => {
      try {
        setLoading("Loading");
        const res = await Axios.get("api/showthread?page=0&limit=4");
        setData(res?.data?.threads as Thread[]);
        setLoading("Loaded");
      } catch (error) {
        console.log(error);
        setLoading("Not Found");
      }
    };
    fetch();
  }, []);
  // console.log(data)

  return (
    <div className="bg-white flex flex-col gap-2 shadow p-4 rounded-xl">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold tracking-wide">
          Student Threads
        </h1>
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
      <div className="threads flex flex-col gap-6 pt-3">
        {loading == "Loading" ? (
          <>
            <ThreadSkeleton></ThreadSkeleton>
            <ThreadSkeleton></ThreadSkeleton>
          </>
        ) : loading == "Loaded" ? (
          data?.map((ele, ind) => {
            return (
              <div className="flex flex-col gap-4 " key={ind}>
                <SingleThread singleThread={ele} key={ind}></SingleThread>
                <hr></hr>
              </div>
            );
          })
        ) : (
          <div className="text-xl font-semibold text-slate-500 text-center ">
            No Threads Found
          </div>
        )}
      </div>
      {loading != "Not Found" && <LoadThreads></LoadThreads>}
      {/* <hr className="mt-4"></hr> */}
      {/* <div className="grid place-content-center">
        <Button
          variant={"ghost"}
          className="text-lg text-blue-500 font-semibold hover:text-blue-500"
        >
          Load More Threads
        </Button>
      </div> */}
    </div>
  );
};

export default StudentsThreads;

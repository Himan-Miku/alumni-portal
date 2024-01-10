"use client";

import React from "react";
import { useQuery } from "react-query";
import InfoCard from "./InfoCard";
import About from "./About";
import { User } from "app/types";
import Axios from "app/Axios";
import { Skeleton } from "components/ui/skeleton";

const UserInfo = () => {
  let user = useQuery("user", async () => {
    let data = await Axios.get("/api/user", {
      withCredentials: true,
    });
    console.log(data);
    return data?.data?.user as User;
  });
  return (
    <>
      {user?.isLoading ? (
        <div className="flex flex-col gap-4">
          <Skeleton className="flex  flex-col h-80">
            <Skeleton className="w-full h-96  rounded-md  flex justify-center gap-4 items-center ">
              <Skeleton className="w-32 rounded-full aspect-square bg-slate-200"></Skeleton>
              <Skeleton className="flex flex-col gap-2">
                <Skeleton className="w-24 h-6 rounded-none bg-slate-200"></Skeleton>
                <Skeleton className="w-48 h-4 bg-slate-200"></Skeleton>
              </Skeleton>
            </Skeleton>
            <Skeleton className="h-full bg-slate-200"></Skeleton>
          </Skeleton>
          <Skeleton className="flex flex-col ">
            <Skeleton className="m-4 bg-slate-200 h-6 w-24 rounded-none"></Skeleton>
            <Skeleton className="mx-4 bg-slate-200 h-12 w-[90%] rounded-none"></Skeleton>
            <Skeleton className="m-4 my-6 bg-slate-200 h-8 w-24 rounded-none"></Skeleton>
            <Skeleton className="flex justify-between">
              <Skeleton>
                <Skeleton className="w-48 mx-4 bg-slate-200 h-5"></Skeleton>
                <Skeleton className="m-4 h-3 w-24 bg-slate-200"></Skeleton>
              </Skeleton>
              <Skeleton>
                <Skeleton className="w-48 mx-4 bg-slate-200 h-5"></Skeleton>
                <Skeleton className="m-4 h-3 w-24 bg-slate-200"></Skeleton>
              </Skeleton>
            </Skeleton>
            <Skeleton className="flex justify-between">
              <Skeleton>
                <Skeleton className="w-48 mx-4 bg-slate-200 h-5"></Skeleton>
                <Skeleton className="m-4 h-3 w-24 bg-slate-200"></Skeleton>
              </Skeleton>
              <Skeleton>
                <Skeleton className="w-48 mx-4 bg-slate-200 h-5"></Skeleton>
                <Skeleton className="m-4 h-3 w-24 bg-slate-200"></Skeleton>
              </Skeleton>
            </Skeleton>
          </Skeleton>
        </div>
      ) : (
        <>
          <InfoCard User={user?.data!}></InfoCard>
          <About User={user?.data!}></About>
        </>
      )}
    </>
  );
};

export default UserInfo;

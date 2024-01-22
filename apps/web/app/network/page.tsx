"use client";
import Axios from "app/Axios";
import { EUser } from "app/types";
import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/ui/tabs";
import React from "react";
import { useQuery } from "react-query";

const page = () => {
  let followdata = useQuery("followers", async () => {
    let res = await Axios.get("/api/followers", { withCredentials: true });
    console?.log(res?.data?.user);
    return res?.data?.user as EUser;
  });
  return (
    <div className="min-h-[100vh] flex flex-col gap-2 items-center">
      <div className="flex flex-col">
        <div className="text-2xl">My Network</div>
        <div className="w-full h-[2px] bg-slate-600"></div>
      </div>
      <Tabs defaultValue="followers" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="followers">Followers</TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
        </TabsList>
        <TabsContent value="followers">
          <div>
            {followdata?.data?.followers?.map((ele) => {
              return <div>{ele?.name}</div>;
            })}
          </div>
        </TabsContent>
        <TabsContent value="following">
          <div className="flex flex-col">
            {followdata?.data?.following?.map((ele, ind) => {
              return (
                <div
                  key={ind}
                  className=" flex cursor-pointer justify-between items-center p-2  hover:bg-slate-100"
                >
                  <div className="flex gap-2">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                        className="w-12 rounded-3xl"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="text-black">
                      <div className="">{ele?.name}</div>
                      <div className="text-sm text-medgray">{ele?.about}</div>
                    </div>
                  </div>
                  <div className="text-sm ">
                    {!ele?.following?.includes(followdata?.data?._id) &&
                      "Following You"}
                  </div>
                </div>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;

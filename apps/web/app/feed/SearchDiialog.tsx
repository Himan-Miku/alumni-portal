"use client";
import { User } from "app/types";
import axios from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";
import { Button } from "components/ui/button";
import { IoSearchOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "components/ui/dialog";
import React from "react";
import { useState } from "react";
import { ScrollArea } from "components/ui/scroll-area";
import Axios from "@/app/Axios";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useQuery } from "react-query";

export function SearchDialog() {
  let { data } = useSession();
  let [search, setSearched] = useState<string>("");
  let [fetch, setFetch] = useState<User[]>([]);
  let [loading, setLoading] = useState<Boolean>(false);
  const router = useRouter();

  React.useEffect(() => {
    const debounce = setTimeout(async () => {
      if (search == "") setLoading(false);
      else setLoading(true);

      search == ""
        ? setFetch([])
        : await Axios.get(`/api/users?keyword=${search}`, {
            withCredentials: true,
          }).then((res) => {
            setLoading(false);
            setFetch(res?.data?.user);
          });
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [search]);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-[70%] flex hover:bg-slate-300 ">
          <div className=" text-left w-full items-center flex gap-1">
            <IoSearchOutline /> Search....
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[26rem]">
        <div className=" flex flex-col gap-1">
          <div className="flex flex-col mt-4">
            <div className="flex items-center gap-2 bg-gray-200 px-3 rounded-md">
              <CiSearch></CiSearch>

              <input
                type="text"
                className="bg-gray-200 h-10 text-sm w-full outline-none"
                name="search"
                placeholder="Search a User"
                value={search}
                onChange={(e) => {
                  setSearched(e?.target?.value);
                }}
              ></input>
            </div>
          </div>
          <div className="">
            <ScrollArea className="h-72 rounded-md ">
              {search != "" && fetch?.length == 0 && !loading && (
                <div>No Data Found</div>
              )}
              {loading && <div>Loading...</div>}
              {fetch?.map((el, ind) => {
                return (
                  <div
                    key={ind}
                    className=" flex cursor-pointer justify-between items-center p-2 m-2 mx-4 hover:bg-slate-300"
                    onClick={() => {
                      router.push(`/user/${el?._id}`);
                    }}
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
                        <div className="">{el?.name}</div>
                        <div className="text-sm text-medgray">{el?.about}</div>
                      </div>
                    </div>
                    <div className="text-sm  text-lightgray">
                      {/* Followers: */}
                      {/* <span className="text-blue-400">
                        {el?.followers?.length}
                      </span> */}
                      {data?.user?.following?.includes(el?._id!) && (
                        <span className="bg-bluebg p-2 rounded-full text-text">
                          {"Following "}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </ScrollArea>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

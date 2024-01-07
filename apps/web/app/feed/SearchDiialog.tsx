"use client";
import { User } from "app/types";
import axios from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";
import { Button } from "components/ui/button";
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

export function SearchDialog() {
  let [search, setSearched] = useState<string>("");
  let [fetch, setFetch] = useState<User[]>([]);

  React.useEffect(() => {
    const debounce = setTimeout(() => {
      search == ""
        ? setFetch([])
        : axios
            .get(`http://localhost:8000/api/users?keyword=${search}`, {
              withCredentials: true,
            })
            .then((res) => setFetch(res?.data?.user));
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [search]);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-[70%] flex hover:bg-slate-300 ">
          <div className=" text-left w-full ">Search....</div>
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
              {search != "" && fetch?.length == 0 && <div>No Data Found</div>}
              {fetch?.map((el, ind) => {
                return (
                  <div
                    key={ind}
                    className=" flex justify-between items-center  p-2 px-4 hover:bg-slate-50"
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
                        <div className="text-sm text-lightgray">
                          {el?.about}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-bold text-lightgray">
                      Followers:
                      <span className="text-blue-400">
                        {el?.followers?.length}
                      </span>
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

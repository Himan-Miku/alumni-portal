import { IoMdPeople } from "react-icons/io";
import React from "react";
import { TbMessage2Minus } from "react-icons/tb";
import { Input } from "components/ui/input";

const SearchUtility = () => {
  return (
    <div className="">
      <div className="flex justify-between px-4 p-1 bg-white rounded-md">
        <input
          type="text"
          placeholder="Search"
          className="border-none outline-none text-sm h-8 p-2 self-center max-w-[60%]"
        />
        <div className="flex gap-4 text-slate-600">
          <div className=" flex flex-col items-center text-xs cursor-pointer">
            <IoMdPeople size={24}></IoMdPeople>
            <div className="whitespace-nowrap">My Network</div>
          </div>
          <div className=" flex flex-col items-center cursor-pointer text-xs">
            <TbMessage2Minus size={24}></TbMessage2Minus>
            <div>Messaging</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchUtility;

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CreateThread = () => {
  return (
    <div className=" shadow bg-white p-2 rounded-md w-full">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="text-slate-500 text-base">
          Create Your Own thread . Ask anything here to your Seniors ....
        </div>
      </div>
    </div>
  );
};

export default CreateThread;

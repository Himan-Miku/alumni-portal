import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CreateThread = () => {
  return (
    <div className="my-2 bg-white p-2 rounded-md w-full">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="text-slate-400 text-sm">
          Create Your Own thread . Ask anything here to your Seniors ....
        </div>
      </div>
    </div>
  );
};

export default CreateThread;

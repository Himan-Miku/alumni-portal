"use client";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { RiAttachment2, RiSendPlaneFill } from "react-icons/ri";

export default function MessagesInput() {
  const fileInput = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInput.current && fileInput.current.click();
  };

  const handleFileChange = () => {};

  const sendMessage = () => {};

  return (
    <div className="flex gap-5 items-center rounded-2xl border border-[#7199ff] py-2 px-4 justify-between">
      <div className="cursor-pointer" onClick={handleButtonClick}>
        <Input
          type="file"
          style={{ display: "none" }}
          ref={fileInput}
          onChange={handleFileChange}
        />
        <RiAttachment2 size={22} color="#7199ff" />
      </div>
      <div className="flex-grow">
        <input
          type="text"
          className="px-2 py-1 focus:outline-none w-full"
          placeholder="Please ask specific questions ..."
        />
      </div>
      <div className="cursor-pointer" onClick={sendMessage}>
        <RiSendPlaneFill size={22} color="#7199ff" />
      </div>
    </div>
  );
}

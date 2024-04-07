import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { LuDot } from "react-icons/lu";
interface AlumniCardProps {
  image: string;
  Name: string;
  Batch: number;
  Branch: string;
  Position: string;
  Company: string;
}

const AlumniCard = () => {
  return (
    <div className="flex flex-col  md:w-[260px] justify-around md:p-3  md:mx-5  shadow-inner mt-3">
      <Image
        src="/AlumniImage.png"
        alt="alumni image"
        width={220}
        height={170}
        className="rounded-md w-full"
      ></Image>
      <h3 className="text-lg font-bold p-1">Zara Larsson</h3>
      <div className="flex items-center p-1">
        <h4>2023 </h4>
        <LuDot />
        <h4>IT</h4>
      </div>
      <div className="flex text-sm text-muted-foreground p-1">
        <h4>Web developer</h4>
        <h4>@Data Axel</h4>
      </div>
      <Button className="bg-[#7199FF] hover:bg-blue-500 hover:scale-105 transition">
        View Profile
      </Button>
    </div>
  );
};

export default AlumniCard;

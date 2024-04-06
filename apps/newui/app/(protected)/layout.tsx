import Navbar from "@/components/Navbar";
import React from "react";

const Protectedlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row bg-bg h-full">
        <Navbar></Navbar>
        {children}
      </div>
    </>
  );
};

export default Protectedlayout;

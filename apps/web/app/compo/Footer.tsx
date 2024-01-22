import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  let nav = [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "/feed",
      title: "Feed",
    },
    {
      link: "/alumni_talk",
      title: "Alumni Talk",
    },
    {
      link: "/events",
      title: "Events",
    },
  ];
  return (
    <div className="bg-bluebg p-5 grid grid-cols-2 lg:grid-cols-4 justify-items-center">
      <div className="hidden text-white lg:grid grid-col gap-2">
        <div className="text-text text-lg font-semibold  ">About College</div>
        <div className="text-justify text-sm">
          An Autonomous Institute Affiliated to Savitribai Phule Pune
          University, Approved by AICTE, Accredited by NBA (UG Programs),
          Accredited by NAAC With "A" Grade MHRD-NIRF Rank: 201-250
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-text text-lg font-bold ">Quick Links</div>
        <div className="flex flex-col">
          {nav?.map((ele, ind) => {
            return (
              <Link href={ele?.link} className="text-white text-sm" key={ind}>
                {ele?.title}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="hidden lg:flex flex-col gap-2 text-white">
        <div className="text-text text-lg font-bold">Address</div>
        <div className="text-sm">
          S.NO 85/2, Pune-Mumbai bypass Highway, Tathawade, Pune-33, Maharashtra
          - 411033
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 text-white">
          <div className="text-text text-lg font-semibold">Contact Us</div>
          <a href="alumni@jspmrscoe.edu.in" className="text-sm">
            alumni@jspmrscoe.edu.in
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-text text-lg font-semibold">Find us on</div>
          <div className="flex gap-6 text-white">
            <FaInstagram size={22}></FaInstagram>
            <FaLinkedin size={22}></FaLinkedin>
            <FaYoutube size={22}></FaYoutube>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

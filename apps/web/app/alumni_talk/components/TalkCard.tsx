import Image from "next/image";
import React from "react";
import { Item } from "../model/YoutubeModel";

const TalkCard = ({key , data} : {key : any , data : Item}) => {
  return <div className="bg-white m-5 h-[45vh] w-[40vh] md:w-[45vh] lg:w-[50vh] rounded-sm p-2 shadow-md">
    <div className="flex justify-center items-center  w-full">
      <iframe
        className="aspect-video w-full rounded-sm "
        src={`https://www.youtube.com/embed/${data.id.videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share ;fullscreen"
        ></iframe>
    </div>
    <div className="flex flex-col justify-start items-start mx-2 py-3">
      <p className=" font-bold text-xs md:text-sm">
        {`${data.snippet.title.replace("&#39;", "'")}`}
      </p>
      <p className="text-xs font-medium pt-2">
        {data.snippet.description}
      </p>
    </div>
  </div>;
};

export default TalkCard;
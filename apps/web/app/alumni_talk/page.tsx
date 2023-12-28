'use client'

import React, { useEffect, useState } from "react";
import TalkCard from "./components/TalkCard";
import { fetchYoutubeData } from "./repository/data";




const AlumniTalk = () => {

  const [data, setData] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [prePageToken, setPrePageToken] = useState("");
  const [currentPage , setCurrentage] = useState(1);
  const [prePage , setPrePage] = useState(1);

  useEffect(()=>{
    if(currentPage > prePage){
      setPrePage(currentPage);
      const response = fetchYoutubeData(nextPageToken);
      response.then((res)=>{
        setData(res.items);
        setNextPageToken(res.nextPageToken);
        if(currentPage > 1){
          setPrePageToken(res.prevPageToken);
        }
      })
    }else{
      setPrePage(currentPage);
      const response = fetchYoutubeData(prePageToken);
      response.then((res)=>{
        setData(res.items);
        setNextPageToken(res.nextPageToken);
        if(currentPage > 1){
          setPrePageToken(res.prevPageToken);
        }
      })
    }

    console.log(currentPage);
  }, [currentPage]);

  return <div className="h-max w-[100%]">
    <h3 className="text-center text-2xl font-sans m-4 font-[400] relative underline-offset-[10px] underline lg:text-4xl">
      “ Explore the Previous Talks ”
    </h3>

    <div className="flex flex-wrap w-full justify-center items-center pt-10">
      {
        data.map((item, index) => {
          return <TalkCard key={index} data={item} />;
        })
      }
    </div>

    <div className="h-16"></div>
    <div className="w-full flex justify-center items-center">
      <nav className="w-full flex justify-center items-center">
        <div className="flex w-4/5 justify-between items-center">
          <div  onClick={()=>{
              setCurrentage(currentPage-1);
            }} className=" p-3 rounded-md hover:text-[#ea906c] hover:fill-[#ea906c] hover:scale-105 bg-white flex justify-between items-center w-[18vh]">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z">
              </path>
            </svg>
            <h2 className="font-bold">Previous</h2>
          </div>
          <div onClick={()=>{
              setCurrentage(currentPage+1);
            }} className=" p-3 rounded-md hover:text-[#ea906c] hover:fill-[#ea906c] hover:scale-105 bg-white flex justify-between items-center w-[18vh]">
            <h2  className="font-bold">Next</h2>
          <svg xmlns="http://www.w3.org/2000/svg" className="" height="16" width="16" viewBox="0 0 512 512">
            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/>
            </svg>
          </div>
        </div>
      </nav>
    </div>

    <div className="h-16"></div>

  </div>;
};

export default AlumniTalk;

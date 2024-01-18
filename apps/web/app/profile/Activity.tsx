"use client";
import Axios from "app/Axios";
import Feed from "app/components/Feed";
import { Post } from "app/types";
import { Button } from "components/ui/button";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";

interface Posts {
  data: Post[];
  prevCursor?: number;
  nextCursor?: number;
}

const Activity = () => {
  let { data } = useSession();
  let [posts, setPosts] = useState<Post[]>([]);
  let [clicked, setClick] = useState(false);

  const fetchPage = async (
    page: number | undefined = undefined,
    limit: number | undefined = undefined
  ) => {
    const res = await Axios.get(
      `/api/showpost?_id=${data?.user?._id}&limit=${limit}&page=${page}`,
      {
        withCredentials: true,
      }
    );
    console.log(res?.data);
    setPosts([...res?.data?.post]);
  };
  useEffect(() => {
    fetchPage(0, 3);
  }, []);
  // console.log(posts);

  return (
    <div className="bg-white p-5 flex flex-col items-start gap-3 shadow-sm rounded-sm ">
      <div>
        <div className="text-medgray text-xl font-bold">Activities</div>
        <div className="text-blue-400 font-semibold text-sm ">
          1928 Followers
        </div>
      </div>
      <Button className="bg-bluebg text-xs rounded-3xl h-9">Refresh</Button>
      <div className="flex flex-col gap-2 ">
        {posts &&
          posts?.map((ele, ind) => {
            return <Feed data={ele} index={ind}></Feed>;
          })}
      </div>
      {!clicked && (
        <Button
          onClick={() => {
            fetchPage();
            setClick(true);
          }}
          className="w-full bg-slate-500"
        >
          Show more
        </Button>
      )}
    </div>
  );
};

export default Activity;

"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { fetchFeed } from "@/actions/action";
import { Post } from "@/types/types";
import SinglePost from "./Post";

const delay = (milliseconds: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
};
const LoadMore = () => {
  const { ref, inView } = useInView();
  let [data, setData] = useState<Post[]>([]);
  const [loaded, setPageLoaded] = useState(0);

  const loadMoreFn = async () => {
    await delay(100);
    const nextPage = loaded + 1;
    const apiPosts = (await fetchFeed(nextPage)) || [];
    setData((prevPosts: Post[]) => [...prevPosts, ...apiPosts]);
    setPageLoaded(nextPage);
    // console.log(data);
  };

  useEffect(() => {
    if (inView) {
      // console.log("At the end");
      loadMoreFn();
    }
  }, [inView]);
  return (
    <>
      {data?.map((elem, ind) => {
        return (
          <>
            <SinglePost key={ind} data={elem}></SinglePost>
            <hr></hr>
          </>
        );
      })}
      <section>
        <div className="grid place-items-center">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-blue-600 align-[-0.125em] text-slate-300 motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
        <div ref={ref} className=""></div>
      </section>
    </>
  );
};

export default LoadMore;

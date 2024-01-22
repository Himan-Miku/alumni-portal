"use server";

import Axios from "app/Axios";
import { Post } from "app/types";

export const fetchFeed = async (page: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}api/showpost?page=${page}&limit=3`,
      {
        credentials: "include",
      }
    );
    const data = await res.json();
    return data.post as Post[];
  } catch (error) {
    console.log("Error in fetching Feed", error);
  }
  // console.log("here", res);
};

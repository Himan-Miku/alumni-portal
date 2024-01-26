"use server";

import Axios from "app/Axios";
import { Post } from "app/types";

export const fetchFeed = async (page: number) => {
  try {
    // console.log("Uri Fro", process.env.NEXT_PUBLIC_BACKEND);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/api/showpost?page=${page}&limit=3`,
      {
        credentials: "include",
      }
    );
    const data = await res.json();
    console.log(data);
    return data.post as Post[];
  } catch (error) {
    console.log("Error in fetching Feed", error);
  }
};

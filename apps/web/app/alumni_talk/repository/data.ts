import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const CHANNEL_ID = process.env.NEXT_PUBLIC_CHANNEL_ID;

export const fetchYoutubeData = async (pageToken: string) => {
  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/search",
    {
      params: {
        part: "snippet,id",
        channelId: CHANNEL_ID,
        maxResults: 9,
        order: "date",
        key: API_KEY,
        pageToken: "",
      },
    },
  );
  return response.data;
};

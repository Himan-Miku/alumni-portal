import axios from "axios";
// import { getServerSession } from "next-auth/next";

// // const ckie = document.cookie;
// // console.log("Cookie", ckie);
// const session = await getServerSession();
const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND,
  headers: {
    Authorization: "Bearer",
  },
});

export default Axios;

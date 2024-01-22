import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND,
});

console.log("Axios", process.env.BACKEND);

export default Axios;

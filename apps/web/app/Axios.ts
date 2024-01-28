import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND,
});

export default Axios;

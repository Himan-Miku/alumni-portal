import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND,
  headers:{"Custom header":"Sushant"}
});

export default Axios;

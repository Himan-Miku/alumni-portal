import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND,
  headers:{"Authorization":"Bearer eyjh66272766vs6v"}
});

export default Axios;

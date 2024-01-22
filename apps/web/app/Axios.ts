import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.BACKEND_URL,
});
export default Axios;

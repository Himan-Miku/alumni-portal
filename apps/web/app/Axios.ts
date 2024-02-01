import axios from "axios";
// const ckie = document.cookie;
// console.log("Cookie", ckie);
const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND,
  // headers: {
  //   // Authorization: "Bearer " + JSON.stringify(ckie),
  // },
});

export default Axios;

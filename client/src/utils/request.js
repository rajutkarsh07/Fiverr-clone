import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:4000/api/",
  withCredentials: true,
});

export default request;

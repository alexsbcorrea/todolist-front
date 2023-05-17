import axios from "axios";

const token = localStorage.getItem("tokenTD") || "";

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    //Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

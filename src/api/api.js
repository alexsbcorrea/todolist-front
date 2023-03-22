import axios from "axios";

const { token } = JSON.parse(localStorage.getItem("userTD")) || "";

export default axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    Authorization: `Bearer ${token}`,
    //Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

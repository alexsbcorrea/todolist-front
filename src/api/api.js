import axios from "axios";

const { token } = JSON.parse(localStorage.getItem("userTD")) || "";

export default axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Authorization: `Bearer ${token}`,
    //Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

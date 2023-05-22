import axios from "axios";
import { useNavigate } from "react-router-dom";

const token = localStorage.getItem("tokenTD") || "";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error.response.status);
  }
);

export default api;

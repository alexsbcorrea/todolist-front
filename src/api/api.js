import axios from "axios";
import { useNavigate } from "react-router-dom";

const token = localStorage.getItem("tokenTD") || "12345678";

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
    const navigate = useNavigate();
    if (error.response && error.response.status === 401) {
      navigate("/login");
    }
    return Promise.reject(error);
  }
);

export default api;

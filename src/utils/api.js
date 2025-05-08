import axios from "axios";
import configMain from "../config";

// Create an instance of Axios
const API = axios.create({
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// Interceptor to dynamically change the baseURL for each request
API.interceptors.request.use(
  (config) => {
    const randomIndex = Math.floor(Math.random() * 2); // Random index between 0 and 1
    config.baseURL = configMain.BACKEND_API[randomIndex]; // Set the baseURL dynamically
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;

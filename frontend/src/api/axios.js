import axios from "axios";

const API = axios.create({
  baseURL: "https://task-manager-production-23d0.up.railway.app/"
});

// 🔥 Add interceptor to attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;
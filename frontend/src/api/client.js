import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Stage 2 will add: request interceptor to attach JWT from auth context

export default api;

import axios from "axios";

const isLocalhost =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");

// On Vercel, use relative "/api" (same domain). In local dev, use http://localhost:5000/api
const baseURL =
  import.meta.env.VITE_API_URL ||
  (isLocalhost && window.location.port !== "5000" ? "http://localhost:5000/api" : "/api");

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export { api };
export default api;

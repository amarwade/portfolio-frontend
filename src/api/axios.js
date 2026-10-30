import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "https://portfolio-backend-yspt.onrender.com/api";

const API_TIMEOUT_MS = Number(process.env.REACT_APP_API_TIMEOUT_MS || 15000);

const getStoredToken = () => {
  try {
    return sessionStorage.getItem("token");
  } catch (error) {
    return null;
  }
};

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT_MS,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = getStoredToken();

  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      try {
        sessionStorage.removeItem("token");
      } catch (storageError) {
        // Ignore storage access issues in restricted browser contexts.
      }
    }

    return Promise.reject(error);
  }
);

export { API_BASE_URL, API_TIMEOUT_MS };
export default api;
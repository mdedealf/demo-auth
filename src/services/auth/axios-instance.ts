import axios from "axios";
import { useAuthStore } from "../../store/auth-store";

export const AxiosInstance = axios.create({
  baseURL: "https://api.freeapi.app/api/v1/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${useAuthStore.getState().accessToken || ""}`,
  },
});

// Request interceptor to add access token
AxiosInstance.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle token expiration
AxiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // if 401 error and not retrying already
    if (
      error.response &&
      error.response.status === 401 &&
      !error.config._retry
    ) {
      originalRequest._retry = true;

      // Atempt to refresh token
      try {
        // request new tokens synchronously
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post(
          "https://api.freeapi.app/api/v1/users/refresh-token",
          { refreshToken }
        );

        const { accessToken } = response.data.data;

        // update tokens in localStorage & Zustand store
        const authStore = useAuthStore.getState();
        localStorage.setItem("accessToken", accessToken);
        authStore.setAccessToken(accessToken);

        // Retry original request
        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
        // AxiosInstance.defaults.headers.common[
        //   "Authorization"
        // ] = `Bearer ${accessToken}`;
        
        return AxiosInstance(originalRequest);
      } catch (error) {
        // clear tokens on failure
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

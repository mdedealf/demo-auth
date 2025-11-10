import { create } from "zustand";
interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  userRole: string | null;
  setTokens: (
    accessToken: string | null,
    refreshToken: string | null,
    userRole: string | null
  ) => void;
  setAccessToken: (accessToken: string | null) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: localStorage.getItem("accessToken") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
  userRole: localStorage.getItem("userRole") || null,

  setAccessToken: (accessToken) => {
    if (accessToken) localStorage.setItem("accessToken", accessToken);
    else localStorage.removeItem("accessToken");

    set({ accessToken });
  },

  setTokens: (accessToken, refreshToken, userRole) => {
    if (accessToken) localStorage.setItem("accessToken", accessToken);
    else localStorage.removeItem("accessToken");

    if (refreshToken) localStorage.setItem("refreshToken", refreshToken);
    else localStorage.removeItem("refreshToken");

    if (userRole) localStorage.setItem("userRole", userRole);
    else localStorage.removeItem("userRole");

    set({ accessToken, refreshToken, userRole });
  },

  clearAuth: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userRole");
    set({ accessToken: null, refreshToken: null, userRole: null });
  },
}));

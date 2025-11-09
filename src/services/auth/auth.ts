import { useMutation } from "@tanstack/react-query";
import { AxiosInstance } from "./axios-instance";
import type { LoginResponse } from "../../types/login-response";

export type RegisterPayload = {
  username: string;
  email: string;
  password: string;
  role: string;
};

export const useRegister = () => {
  const mutation = useMutation({
    mutationFn: async (data: RegisterPayload) => {
      const response = await AxiosInstance.post("users/register", data);
      return response.data;
    },
  });

  return {
    ...mutation,
    registerUser: mutation.mutateAsync,
  };
};

export type LoginPayload = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const mutation = useMutation({
    mutationFn: async (data: LoginPayload) => {
      const response = await AxiosInstance.post<LoginResponse>(
        "users/login",
        data
      );
      return response.data;
    },
  });

  return {
    ...mutation,
    loginUser: mutation.mutateAsync,
  };
};

import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { loginUser } from "../../services/auth.service";
import useAuthStore from "../../store/authStore";
import type { LoginFormValues } from "../../validations/loginSchema";

export function useLogin() {
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: (data: LoginFormValues) => loginUser(data),
    onSuccess: (data) => {
      login(data)
    },
    onError: (error: any) => {
      message.error(error?.response?.data?.message || 'Login gagal');
    },
  });
}
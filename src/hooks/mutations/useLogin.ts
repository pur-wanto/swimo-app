import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../services/auth.service";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

export function useLogin() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate()

  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      message.success('Login sukses!');
      login()
      navigate("/dashboard");
    },
    onError: (error: any) => {
      message.error(error?.response?.data?.message || 'Login gagal');
    },
  });
}
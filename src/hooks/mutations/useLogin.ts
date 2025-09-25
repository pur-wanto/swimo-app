import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../services/auth.service";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      message.success('Login sukses!');
      navigate("/dashboard");
    },
    onError: (error: any) => {
      message.error(error?.response?.data?.message || 'Login gagal');
    },
  });
}
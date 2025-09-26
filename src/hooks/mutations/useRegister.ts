import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/auth.service";
import { message } from "antd";

export function useRegister() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      message.success('Register sukses!');
      navigate("/login")
    },
    onError: (error: any) => {
      message.error(error?.response?.data?.message || 'Register gagal');
    },
  });
}
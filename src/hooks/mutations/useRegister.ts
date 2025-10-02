import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../services/auth.service";
import useAuthStore from "../../store/authStore";
import type { RegisterFormValues } from "../../validations/registerSchema";

export function useRegister() {
  const login = useAuthStore((state) => state.login)

  return useMutation({
    mutationFn: (data: RegisterFormValues) => registerUser(data),
    onSuccess: (data) => {
      login(data)
    },
  });
}
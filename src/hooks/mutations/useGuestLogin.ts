import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginGuest } from "../../services/auth.service";
import { useAuthStore } from "../../store/authStore";

export function useGuestLogin() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginGuest,
    onSuccess: () => {
      login();
      navigate("/dashboard")
    },
  });
}
import { useMutation } from "@tanstack/react-query";
import { loginGuest } from "../../services/auth.service";
import useAuthStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";

export function useGuestLogin() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => loginGuest(),
    onSuccess: (data) => {
      login(data);
      navigate("/dashboard");
    },
  });
}
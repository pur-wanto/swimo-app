import { useMutation } from "@tanstack/react-query";
import { loginGuest } from "../../services/auth.service";
import useAuthStore from "../../store/authStore";

export function useGuestLogin() {
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: () => loginGuest(),
    onSuccess: (data) => {
      login(data);
    },
  });
}
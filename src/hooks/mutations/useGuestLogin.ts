import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginGuest } from "../../services/auth.service";

export function useGuestLogin() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginGuest,
    onSuccess: () => {
      navigate("/dashboard")
    },
  });
}
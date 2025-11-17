import { useMutation, useQueryClient } from "@tanstack/react-query";
import userService from "@/services/user.service";
import { useNavigate } from "react-router";

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { password: string; email: string }) =>
      userService.loginUser(data.email, data.password),

    onSuccess: ({ token, userId }) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      localStorage.setItem("auth_token", token);
      localStorage.setItem("userId", userId);
      navigate("/dashboard");
    },
  });
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import userService from "@/services/user.service";
import { useNavigate } from "react-router";

export const useRegister = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { password: string; email: string }) =>
      userService.registerUser(data.email, data.password),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      navigate("/form/login");
    },
  });
};

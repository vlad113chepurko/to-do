import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useModalStore } from "@/store/useModalStore";
import axios from "axios";

export function useAddTodo() {
  const queryClient = useQueryClient();
  const { setModal } = useModalStore();

  return useMutation({
    mutationFn: async ({
      title,
      description,
      status,
    }: {
      title: string;
      description: string;
      status: string;
    }) => {
      const userId = localStorage.getItem("userId");
      const response = await axios.post(
        "http://localhost:3000/api/todos/createTodo",
        { title, description, status, userId }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      setModal(false);
    },
  });
}

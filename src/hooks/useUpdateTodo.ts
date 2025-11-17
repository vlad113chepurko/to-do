import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      title,
      completed,
    }: {
      id: string;
      title: string;
      completed: boolean;
    }) => {
      if (!id) throw new Error("Todo ID is missing");

      const res = await axios.put(
        `http://localhost:3000/api/todos/updateTodo/${id}`,
        { title, completed }
      );

      return res.data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      queryClient.invalidateQueries({ queryKey: ["todo", variables.id] });
    },
  });
};

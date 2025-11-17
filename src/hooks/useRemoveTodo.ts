import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useRemoveTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      console.log("Id: ", id);
      
      await axios.delete(`http://localhost:3000/api/todos/deleteTodo/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
}

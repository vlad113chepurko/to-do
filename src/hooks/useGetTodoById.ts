import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetTodoById = (id: string) => {
  return useQuery({
    queryKey: ["todo", id],
    queryFn: async () => {
      if (!id) throw new Error("Todo ID is missing");

      const res = await axios.get(
        `http://localhost:3000/api/todos/getTodoById/${id}`
      );
      return res.data;
    },
    enabled: !!id,
  });
};

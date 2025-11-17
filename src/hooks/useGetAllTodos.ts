import axios from "axios";

export const useGetAllTodos = () => {
  const fetchTodos = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/todos/getAll");
      return res.data;
    } catch (e) {
      console.error(e);
    }
  };

  return { fetchTodos };
};

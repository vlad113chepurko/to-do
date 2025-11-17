import { create } from "zustand";

interface User {
  id: string;
  email: string;
  password: string;
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  user: User;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

interface TodoStore {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  addTodo: (todo: Todo) => void;
  updateTodo: (updatedTodo: Todo) => void;
  deleteTodo: (id: number) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  setTodos: (todos) => set({ todos }),
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  updateTodo: (updatedTodo) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      ),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));

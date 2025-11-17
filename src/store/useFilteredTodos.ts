import { create } from "zustand";

interface FilterStatusState {
  filteredTodos: string[];
  setFilteredTodos: (todos: string[]) => void;
}

export const useFilteredTodos = create<FilterStatusState>((set) => ({
  filteredTodos: [],
  setFilteredTodos: (todos) => set({ filteredTodos: todos }),
}));

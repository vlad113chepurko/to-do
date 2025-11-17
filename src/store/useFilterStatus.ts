import { create } from "zustand";

interface FilterStatusState {
  filterStatus: "all" | "todo" | "in-progress" | "done";
  setFilterStatus: (status: "all" | "todo" | "in-progress" | "done") => void;
}

export const useFilterStatus = create<FilterStatusState>((set) => ({
  filterStatus: "all",
  setFilterStatus: (status) => set({ filterStatus: status }),
}));
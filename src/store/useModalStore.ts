import { create } from "zustand";

interface ModalStore {
  isModal: boolean;

  isUpdateModal: boolean;
  setIsUpdateModal: (isOpen: boolean) => void;

  selectedTodoId: string;
  setSelectedTodoId: (id: string) => void;

  setModal: (isOpen: boolean) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isModal: false,
  isUpdateModal: false,

  selectedTodoId: "",
  setSelectedTodoId: (id) => set({ selectedTodoId: id }),

  setIsUpdateModal: (isOpen) => set({ isUpdateModal: isOpen }),
  setModal: (isOpen) => set({ isModal: isOpen }),
}));

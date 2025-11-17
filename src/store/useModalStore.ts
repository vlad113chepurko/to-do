import { create } from "zustand";

interface ModalStore {
  isModal: boolean;
  isUpdateModal: boolean;
  setIsUpdateModal: (isUpdateModal: boolean) => void;
  setModal: (isModal: boolean) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isModal: false,
  isUpdateModal: false,
  setIsUpdateModal: (isUpdateModal) => set({ isUpdateModal }),
  setModal: (isModal) => set({ isModal }),
}));

import { create } from "zustand";

interface ModalStore {
  isModal: boolean;
  setModal: (isModal: boolean) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isModal: false,
  setModal: (isModal) => set({ isModal }),
}));

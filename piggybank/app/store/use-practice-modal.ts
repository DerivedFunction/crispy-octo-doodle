import { create } from "zustand";

type PracticeModalState = {
  isOpen: boolean;
  close: () => void;
  open: () => void;
};

export const usePracticeModal = create<PracticeModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

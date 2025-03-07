import { create } from "zustand";

type HeartsModalState = {
  isOpen: boolean;
  close: () => void;
  open: () => void;
};

export const useHeartsModal = create<HeartsModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

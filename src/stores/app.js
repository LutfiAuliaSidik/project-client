import { create } from "zustand";

export const useNavbarStatus = create((set) => ({
  status: false,
  setStatus: (status) => set({ status })
}))

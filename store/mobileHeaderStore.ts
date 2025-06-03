import { create } from "zustand"

interface MobileHeaderState {
  openHeader: boolean
  setOpenHeader: () => void
}

export const useMobileHeaderStore = create<MobileHeaderState>((set) => ({
  openHeader: false,
  setOpenHeader: () => set((state) => ({ openHeader: !state.openHeader }))
}))

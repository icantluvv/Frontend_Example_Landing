import { create } from "zustand"

interface NavigationState {
  chooseNavElement: string
  setChooseNavElement: (id: string) => void
}

export const useNavigationStateStore = create<NavigationState>((set) => ({
  chooseNavElement: "about",
  setChooseNavElement: (id) => set({ chooseNavElement: id })
}))

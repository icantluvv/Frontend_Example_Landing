import { create } from "zustand"

interface AccordionState {
  openAccordion: number | null
  setOpenAccordion: (id: number | null) => void
}

export const useAccordionStore = create<AccordionState>((set) => ({
  openAccordion: null,
  setOpenAccordion: (id) => set({ openAccordion: id })
}))

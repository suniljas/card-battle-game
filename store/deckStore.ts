import create from 'zustand';

export const useDeckStore = create((set) => ({
  deck: [],
  addToDeck: (card) => set((state) => ({ deck: [...state.deck, card] })),
  resetDeck: () => set({ deck: [] })
}));

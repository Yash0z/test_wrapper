import { create } from 'zustand';
import type { ApiKeys } from './store_types';

export const useApiKey = create<ApiKeys>((set) => ({
  keys: {},
  setKey: (service: string, key: string) =>
    set((state) => ({
      keys: {
        ...state.keys,
        [service]: key,
      },
    })),
  removeKey: (service: string) =>
    set((state) => {
      const { [service]: _, ...keys } = state.keys;
      return { keys };
    }),
  clearKeys: () => set({ keys: {} }),
}));

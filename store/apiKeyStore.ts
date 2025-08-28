import { create } from 'zustand';
import type { ApiKeys } from './store_types';

// Load persisted keys safely (browser only)
function loadKeys(): Record<string, string> {
  if (typeof window === 'undefined') return;
  const stored = localStorage.getItem('api_keys');
  if (!stored) return {};
  try {
    return JSON.parse(stored);
  } catch {
    return {};
  }
}

export const useApiKey = create<ApiKeys>((set, get) => ({
  keys: loadKeys(),

  setKey: (provider: string, key: string) =>
    set((state) => {
      const newKeys = { ...state.keys, [provider]: key };
      if (typeof window !== 'undefined') {
        localStorage.setItem('api_keys', JSON.stringify(newKeys));
      }
      return { keys: newKeys };
    }),

  removeKey: (provider: string) =>
    set((state) => {
      const { [provider]: _, ...keys } = state.keys;
      if (typeof window !== 'undefined') {
        localStorage.setItem('api_keys', JSON.stringify(keys));
      }
      return { keys };
    }),

  getKey: (provider: string) => get().keys[provider],

  clearKeys: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('api_keys');
    }
    set({ keys: {} });
  },
}));

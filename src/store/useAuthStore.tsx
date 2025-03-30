import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  tokenState: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      tokenState: null,
      setToken: (tokenState) => set({ tokenState }),
      clearToken: () => set({ tokenState: null }),
    }),
    {
      name: 'auth-token', // Nome do item no localStorage
    }
  )
);

export default useAuthStore;
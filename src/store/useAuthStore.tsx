import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { setCookie } from './useCookies';

interface AuthState {
  tokenState: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      tokenState: null,
      setToken: async (tokenState) => {
        set({ tokenState })
        await setCookie('token', tokenState);
      },
      clearToken: async () => {
        set({ tokenState: null });
        await setCookie('token', '');
      },
    }),
    {
      name: 'auth-token',
    }
  )
);

export default useAuthStore;
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface User {
  name: string;
  email: string;
  weight: number;
  height: number;
  age: number;
}

interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean;
  login: (data: LoginResponse) => void;
  logout: () => void;
}

export interface LoginResponse extends User {
  token: string;
  refreshToken: string;
  expiresIn: number;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      refreshToken: null,
      isLoggedIn: false,

      login: (data: LoginResponse) => {
        set({
          user: {
            name: data.name,
            email: data.email,
            age: data.age,
            weight: data.weight,
            height: data.height,
          },
          token: data.token,
          refreshToken: data.refreshToken,
          isLoggedIn: true,
        })
      },

      logout: () => {
        set({
          user: null,
          token: null,
          refreshToken: null,
          isLoggedIn: false,
        })
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default useAuthStore;

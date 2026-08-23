import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  name: string
}

interface AuthState {
  isAuthenticated: boolean
  password: string
  appName: string
  appIcon: string
  user: User | null
  setPassword: (password: string) => void
  login: (password: string) => boolean
  logout: () => void
  setAppName: (name: string) => void
  setAppIcon: (icon: string) => void
  setUser: (user: User) => void
}

export const useAuthStore = create<AuthState>(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      password: '1234',
      appName: 'Chat App',
      appIcon: '💬',
      user: null,
      setPassword: (password: string) => set({ password }),
      login: (password: string) => {
        const { password: storedPassword } = get()
        if (password === storedPassword) {
          set({ isAuthenticated: true })
          return true
        }
        return false
      },
      logout: () => set({ isAuthenticated: false }),
      setAppName: (name: string) => set({ appName: name }),
      setAppIcon: (icon: string) => set({ appIcon: icon }),
      setUser: (user: User) => set({ user }),
    }),
    {
      name: 'auth-store',
    }
  )
)

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Theme {
  name: string
  primaryColor: string
  secondaryColor: string
  backgroundColor: string
  textColor: string
  borderColor: string
}

const themes: Record<string, Theme> = {
  dark: {
    name: 'Discord Dark',
    primaryColor: '#6366f1',
    secondaryColor: '#818cf8',
    backgroundColor: '#0f172a',
    textColor: '#f1f5f9',
    borderColor: '#1e293b',
  },
  light: {
    name: 'Light',
    primaryColor: '#6366f1',
    secondaryColor: '#818cf8',
    backgroundColor: '#f8fafc',
    textColor: '#0f172a',
    borderColor: '#e2e8f0',
  },
  pastel: {
    name: 'Pastel',
    primaryColor: '#f472b6',
    secondaryColor: '#fbcfe8',
    backgroundColor: '#fdf2f8',
    textColor: '#831843',
    borderColor: '#fbcfe8',
  },
  neon: {
    name: 'Neon',
    primaryColor: '#00ff00',
    secondaryColor: '#00cc00',
    backgroundColor: '#000000',
    textColor: '#00ff00',
    borderColor: '#003300',
  },
}

interface ThemeState {
  theme: Theme
  themes: Record<string, Theme>
  setTheme: (name: string) => void
  updateTheme: (colors: Partial<Theme>) => void
}

export const useThemeStore = create<ThemeState>(
  persist(
    (set) => ({
      theme: themes.dark,
      themes,
      setTheme: (name: string) => {
        if (themes[name]) {
          set({ theme: themes[name] })
        }
      },
      updateTheme: (colors: Partial<Theme>) =>
        set((state) => ({
          theme: { ...state.theme, ...colors },
        })),
    }),
    {
      name: 'theme-store',
    }
  )
)

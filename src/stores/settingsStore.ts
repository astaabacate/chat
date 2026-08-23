import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Settings {
  notificationsEnabled: boolean
  soundEnabled: boolean
  vibrationEnabled: boolean
  autoLockTime: number // in seconds
  messagePreviewInNotifications: boolean
  disguiseMode: boolean
}

interface SettingsState {
  settings: Settings
  updateSetting: <K extends keyof Settings>(key: K, value: Settings[K]) => void
  getSettings: () => Settings
}

const defaultSettings: Settings = {
  notificationsEnabled: true,
  soundEnabled: true,
  vibrationEnabled: true,
  autoLockTime: 30,
  messagePreviewInNotifications: false,
  disguiseMode: true,
}

export const useSettingsStore = create<SettingsState>(
  persist(
    (set, get) => ({
      settings: defaultSettings,
      updateSetting: <K extends keyof Settings>(key: K, value: Settings[K]) =>
        set((state) => ({
          settings: { ...state.settings, [key]: value },
        })),
      getSettings: () => get().settings,
    }),
    {
      name: 'settings-store',
    }
  )
)

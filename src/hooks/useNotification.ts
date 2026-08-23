import { useCallback } from 'react'
import { useSettingsStore } from '../stores/settingsStore'
import { useAuthStore } from '../stores/authStore'

export function useNotification() {
  const { settings } = useSettingsStore()
  const { appName } = useAuthStore()

  const sendNotification = useCallback(
    (title: string, options?: NotificationOptions) => {
      if (!settings.notificationsEnabled) return

      if ('Notification' in window && Notification.permission === 'granted') {
        const notification = new Notification(title, {
          icon: '/icon-192.png',
          ...options,
          tag: 'chat-notification',
        })

        if (settings.soundEnabled) {
          // Play notification sound
          const audio = new Audio('/notification.mp3')
          audio.play().catch(() => {})
        }

        if (settings.vibrationEnabled && 'vibrate' in navigator) {
          navigator.vibrate([200, 100, 200])
        }

        return notification
      }
    },
    [settings]
  )

  const requestPermission = useCallback(async () => {
    if ('Notification' in window && Notification.permission === 'default') {
      await Notification.requestPermission()
    }
  }, [])

  return { sendNotification, requestPermission }
}

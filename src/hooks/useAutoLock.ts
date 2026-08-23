import { useEffect } from 'react'
import { useAuthStore } from '../stores/authStore'
import { useSettingsStore } from '../stores/settingsStore'

export function useAutoLock() {
  const { logout } = useAuthStore()
  const { settings } = useSettingsStore()

  useEffect(() => {
    let lockTimer: NodeJS.Timeout

    const resetTimer = () => {
      clearTimeout(lockTimer)
      lockTimer = setTimeout(() => {
        logout()
      }, settings.autoLockTime * 1000)
    }

    const events = ['mousedown', 'keydown', 'touchstart', 'scroll', 'click']
    events.forEach((event) => {
      window.addEventListener(event, resetTimer)
    })

    resetTimer()

    return () => {
      clearTimeout(lockTimer)
      events.forEach((event) => {
        window.removeEventListener(event, resetTimer)
      })
    }
  }, [settings.autoLockTime, logout])
}

import { useEffect, useState } from 'react'
import { useAuthStore } from './stores/authStore'
import { useChatStore } from './stores/chatStore'
import { useThemeStore } from './stores/themeStore'
import LockPage from './pages/LockPage'
import ChatPage from './pages/ChatPage'
import SettingsPage from './pages/SettingsPage'
import CallPage from './pages/CallPage'
import './styles/globals.css'

function App() {
  const { isAuthenticated, appName } = useAuthStore()
  const { theme } = useThemeStore()
  const [currentPage, setCurrentPage] = useState<'chat' | 'settings' | 'call'>('chat')
  const [inCall, setInCall] = useState(false)

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', theme.primaryColor)
    document.documentElement.style.setProperty('--secondary-color', theme.secondaryColor)
    document.documentElement.style.setProperty('--background-color', theme.backgroundColor)
    document.documentElement.style.setProperty('--text-color', theme.textColor)
  }, [theme])

  if (!isAuthenticated) {
    return <LockPage />
  }

  if (inCall) {
    return <CallPage onEndCall={() => setInCall(false)} />
  }

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>{appName}</h1>
      </div>

      {currentPage === 'chat' && <ChatPage onCall={() => setInCall(true)} />}
      {currentPage === 'settings' && <SettingsPage />}

      <div className="bottom-nav">
        <button
          className={`nav-btn ${currentPage === 'chat' ? 'active' : ''}`}
          onClick={() => setCurrentPage('chat')}
        >
          💬
        </button>
        <button
          className={`nav-btn ${currentPage === 'settings' ? 'active' : ''}`}
          onClick={() => setCurrentPage('settings')}
        >
          ⚙️
        </button>
      </div>
    </div>
  )
}

export default App

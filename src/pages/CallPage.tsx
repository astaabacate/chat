import { useState, useEffect } from 'react'
import { useChatStore } from '../stores/chatStore'

interface CallPageProps {
  onEndCall: () => void
}

function CallPage({ onEndCall }: CallPageProps) {
  const [duration, setDuration] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [isCameraOff, setIsCameraOff] = useState(false)
  const { contactName } = useChatStore()

  useEffect(() => {
    const timer = setInterval(() => {
      setDuration((d) => d + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="call-container">
      <div className="call-avatar">👤</div>
      <div>
        <h2>{contactName}</h2>
        <div className="call-status">Em chamada...</div>
        <div className="call-timer">{formatDuration(duration)}</div>
      </div>

      <div className="call-controls">
        <button
          className="control-btn"
          onClick={() => setIsMuted(!isMuted)}
          style={{
            backgroundColor: isMuted ? 'var(--error-color)' : 'var(--border-color)',
          }}
        >
          {isMuted ? '🔇' : '🔊'}
        </button>
        <button
          className="control-btn"
          onClick={() => setIsCameraOff(!isCameraOff)}
          style={{
            backgroundColor: isCameraOff ? 'var(--error-color)' : 'var(--border-color)',
          }}
        >
          {isCameraOff ? '📹' : '📷'}
        </button>
        <button className="control-btn danger" onClick={onEndCall}>
          📞
        </button>
      </div>
    </div>
  )
}

export default CallPage

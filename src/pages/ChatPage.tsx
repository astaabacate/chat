import { useState, useEffect, useRef } from 'react'
import { useChatStore, Message } from '../stores/chatStore'

interface ChatPageProps {
  onCall: () => void
}

function ChatPage({ onCall }: ChatPageProps) {
  const [messageText, setMessageText] = useState('')
  const { messages, addMessage, isTyping, setTyping, isOnline, contactName } = useChatStore()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (messageText.trim() === '') return

    const newMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      timestamp: Date.now(),
      isOwn: true,
      status: 'sent',
    }

    addMessage(newMessage)
    setMessageText('')

    // Simulate response after 1 second
    setTimeout(() => {
      const responses = [
        'Entendi! 👍',
        'Que legal! 😄',
        'Verdade mesmo',
        'Concordo com você',
        'Haha, boa! 😂',
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]

      const reply: Message = {
        id: Date.now().toString(),
        text: randomResponse,
        timestamp: Date.now(),
        isOwn: false,
        status: 'read',
      }
      addMessage(reply)
    }, 1000)
  }

  return (
    <div className="page-content">
      <div className="messages-container">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.isOwn ? 'own' : 'other'}`}>
            <div>
              <div className="message-bubble">{msg.text}</div>
              <div className="message-time">
                {new Date(msg.timestamp).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="message other">
            <div className="typing-indicator">
              <span>{contactName}</span>
              <span>está digitando</span>
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-container">
        <button
          onClick={onCall}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '22px',
            background: 'var(--primary-color)',
            border: 'none',
            color: 'white',
            fontSize: '20px',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          📞
        </button>
        <form onSubmit={handleSendMessage} style={{ flex: 1, display: 'flex', gap: '8px' }}>
          <input
            type="text"
            className="input-field"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="Digite sua mensagem..."
          />
          <button type="submit" className="send-btn">
            ✈️
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChatPage

import { useState, useEffect } from 'react'
import { useAuthStore } from '../stores/authStore'

function LockPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [locked, setLocked] = useState(false)
  const { login, appName, appIcon } = useAuthStore()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (attempts >= 5) {
      setError('Muito muitas tentativas. Tente novamente em 1 minuto.')
      return
    }

    if (login(password)) {
      setPassword('')
      setError('')
      setAttempts(0)
    } else {
      setError('Senha incorreta')
      setPassword('')
      setAttempts(attempts + 1)
    }
  }

  useEffect(() => {
    if (attempts >= 5) {
      setLocked(true)
      const timer = setTimeout(() => {
        setLocked(false)
        setAttempts(0)
      }, 60000)
      return () => clearTimeout(timer)
    }
  }, [attempts])

  return (
    <div className="lock-screen">
      <div className="lock-icon">{appIcon}</div>
      <div>
        <h2>{appName}</h2>
        <p style={{ fontSize: '12px', marginTop: '8px', opacity: 0.6 }}>
          Digite sua senha para continuar
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '300px' }}>
        <input
          type="password"
          className="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••"
          disabled={locked}
          autoFocus
        />
        {error && (
          <div style={{ color: 'var(--error-color)', fontSize: '12px', marginTop: '12px' }}>
            {error}
          </div>
        )}
        {attempts > 0 && attempts < 5 && (
          <div style={{ color: 'var(--warning-color)', fontSize: '12px', marginTop: '8px' }}>
            Tentativas restantes: {5 - attempts}
          </div>
        )}
        <button
          type="submit"
          className="unlock-btn"
          style={{ marginTop: '16px' }}
          disabled={locked}
        >
          Desbloquear
        </button>
      </form>
    </div>
  )
}

export default LockPage

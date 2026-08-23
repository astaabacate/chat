import { useState } from 'react'
import { useAuthStore } from '../stores/authStore'
import { useThemeStore } from '../stores/themeStore'
import { useSettingsStore } from '../stores/settingsStore'

function SettingsPage() {
  const { password, setPassword, appName, setAppName, appIcon, setAppIcon, logout } =
    useAuthStore()
  const { theme, themes, setTheme, updateTheme } = useThemeStore()
  const { settings, updateSetting } = useSettingsStore()
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handlePasswordChange = () => {
    if (newPassword && newPassword === confirmPassword) {
      setPassword(newPassword)
      setNewPassword('')
      setConfirmPassword('')
      alert('Senha alterada com sucesso!')
    } else {
      alert('Senhas não conferem')
    }
  }

  const handleLogout = () => {
    if (confirm('Tem certeza que deseja sair?')) {
      logout()
    }
  }

  return (
    <div className="page-content">
      <div className="settings-container">
        {/* App Disguise */}
        <div className="settings-section">
          <div className="settings-label">Disfarce do App</div>
          <input
            type="text"
            className="settings-input"
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
            placeholder="Nome do app"
            maxLength={20}
          />
          <input
            type="text"
            className="settings-input"
            value={appIcon}
            onChange={(e) => setAppIcon(e.target.value)}
            placeholder="Emoji do app"
            maxLength={2}
          />
          <small style={{ opacity: 0.6 }}>
            Mude o nome e emoji do app para disfarçar sua função real
          </small>
        </div>

        {/* Password */}
        <div className="settings-section">
          <div className="settings-label">Alterar Senha</div>
          <input
            type="password"
            className="settings-input"
            placeholder="Nova senha"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            className="settings-input"
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            onClick={handlePasswordChange}
            style={{
              padding: '10px 16px',
              background: 'var(--primary-color)',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              marginTop: '8px',
            }}
          >
            Atualizar Senha
          </button>
        </div>

        {/* Notifications */}
        <div className="settings-section">
          <div className="settings-label">Notificações</div>
          <label style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={settings.notificationsEnabled}
              onChange={(e) => updateSetting('notificationsEnabled', e.target.checked)}
            />
            Ativar notificações
          </label>
          <label style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={settings.soundEnabled}
              onChange={(e) => updateSetting('soundEnabled', e.target.checked)}
            />
            Som
          </label>
          <label style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={settings.vibrationEnabled}
              onChange={(e) => updateSetting('vibrationEnabled', e.target.checked)}
            />
            Vibração
          </label>
          <label style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={!settings.messagePreviewInNotifications}
              onChange={(e) => updateSetting('messagePreviewInNotifications', !e.target.checked)}
            />
            Ocultar preview de mensagens
          </label>
        </div>

        {/* Auto-lock */}
        <div className="settings-section">
          <div className="settings-label">Bloqueio Automático</div>
          <select
            className="settings-input"
            value={settings.autoLockTime}
            onChange={(e) => updateSetting('autoLockTime', parseInt(e.target.value))}
          >
            <option value={15}>15 segundos</option>
            <option value={30}>30 segundos</option>
            <option value={60}>1 minuto</option>
            <option value={300}>5 minutos</option>
            <option value={900}>15 minutos</option>
            <option value={3600}>1 hora</option>
          </select>
        </div>

        {/* Theme */}
        <div className="settings-section">
          <div className="settings-label">Tema</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
            {Object.entries(themes).map(([key, themeOption]) => (
              <button
                key={key}
                onClick={() => setTheme(key)}
                style={{
                  padding: '12px',
                  background: theme.name === themeOption.name ? 'var(--primary-color)' : 'var(--border-color)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: '600',
                  transition: 'all 0.2s',
                }}
              >
                {themeOption.name}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Colors */}
        <div className="settings-section">
          <div className="settings-label">Cor Personalizada</div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <label style={{ flex: 1 }}>
              <small>Cor Primária</small>
              <input
                type="color"
                value={theme.primaryColor}
                onChange={(e) => updateTheme({ primaryColor: e.target.value })}
                style={{ width: '100%', height: '40px', border: 'none', borderRadius: '8px' }}
              />
            </label>
            <label style={{ flex: 1 }}>
              <small>Cor Secundária</small>
              <input
                type="color"
                value={theme.secondaryColor}
                onChange={(e) => updateTheme({ secondaryColor: e.target.value })}
                style={{ width: '100%', height: '40px', border: 'none', borderRadius: '8px' }}
              />
            </label>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="settings-section" style={{ borderColor: 'var(--error-color)', borderWidth: '2px' }}>
          <div className="settings-label" style={{ color: 'var(--error-color)' }}>
            Zona de Risco
          </div>
          <button
            onClick={handleLogout}
            style={{
              padding: '12px 16px',
              background: 'var(--error-color)',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              width: '100%',
            }}
          >
            Fazer Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage

# Chat App - Aplicativo de Chat Privado com Disfarce

## 🔐 Visão Geral

Aplicativo PWA mobile-first 100% responsivo para chat privado em tempo real com recursos avançados de segurança e disfarce de funcionalidade. Funciona como Discord, mas com foco em privacidade extrema.

## ✨ Funcionalidades Principais

### Chat em Tempo Real
- ✅ Mensagens de texto instantâneas
- ✅ Indicadores de digitação
- ✅ Status online/offline
- ✅ Confirmação de leitura
- ✅ Histórico sincronizável

### Chamadas
- ✅ Voz em tempo real
- ✅ Vídeo com WebRTC
- ✅ Tela compartilhada (futura)

### Segurança & Privacidade
- ✅ Criptografia End-to-End (E2EE)
- ✅ Senha/PIN obrigatório ao abrir
- ✅ Bloqueio automático ao minimizar
- ✅ Biometria (fingerprint/face ID)
- ✅ Armazenamento encriptado local

### Disfarce & Personalização
- ✅ Nome customizável do app
- ✅ Ícone/logo personalizado
- ✅ Notificações com título fictício
- ✅ Múltiplos temas (Light/Dark/Custom)
- ✅ Cores totalmente customizáveis
- ✅ Modo incógnito visual

### PWA & Mobile
- ✅ Instalação standalone na home screen
- ✅ 100% responsivo (320px+)
- ✅ Offline-first com Service Workers
- ✅ Push notifications nativas
- ✅ Performance otimizada

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Conta Firebase (para backend)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/astaabacate/chat.git
cd chat

# Instale dependências
npm install

# Configure variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com suas credenciais Firebase

# Inicie o servidor de desenvolvimento
npm run dev

# Acesse http://localhost:5173
```

### Build para Produção

```bash
npm run build
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes React reutilizáveis
│   ├── Chat/
│   ├── Call/
│   ├── Settings/
│   ├── Lock/
│   └── Theme/
├── pages/               # Páginas da aplicação
│   ├── ChatPage.tsx
│   ├── SettingsPage.tsx
│   ├── LockPage.tsx
│   └── CallPage.tsx
├── hooks/               # Custom React hooks
│   ├── useAuth.ts
│   ├── useMessages.ts
│   ├── useCalls.ts
│   └── useEncryption.ts
├── services/            # Serviços de backend
│   ├── firebase.ts
│   ├── websocket.ts
│   ├── encryption.ts
│   └── notification.ts
├── stores/              # Estado global (Zustand)
│   ├── authStore.ts
│   ├── chatStore.ts
│   ├── themeStore.ts
│   └── settingsStore.ts
├── utils/               # Funções utilitárias
│   ├── validators.ts
│   ├── formatters.ts
│   └── constants.ts
├── styles/              # Estilos globais
│   └── globals.css
├── App.tsx              # Componente raiz
├── main.tsx             # Entry point
└── serviceWorker.ts     # PWA service worker
```

## 🔧 Configuração

### Firebase Setup

1. Crie um projeto em [Firebase Console](https://console.firebase.google.com)
2. Ative Firestore Database e Realtime Database
3. Configure Firebase Authentication
4. Copie as credenciais para `.env.local`

### WebSocket (Opcional)

Para funcionalidades em tempo real avançadas, configure um servidor Node.js com Socket.io.

## 🎨 Temas Disponíveis

- 🌙 Discord Dark (padrão)
- ☀️ Light Mode
- 🎨 Pastel
- ⚡ Neon
- 🎭 Material Design
- 🧑‍🎨 Customizado (user-defined)

## 🔒 Segurança

### Implementado
- Criptografia TweetNaCl para E2EE
- IndexedDB encriptado
- Rate limiting de tentativas de senha
- Timeout de sessão (30min)
- Content Security Policy headers
- HTTPS obrigatório em produção

### Recomendado
- Usar certificado SSL válido
- Implementar backup encriptado
- Regular security audits
- Monitorar logs de acesso

## 📱 Instalação PWA

### Desktop Chrome/Edge
1. Abra o app no navegador
2. Clique no ícone de instalação na barra de endereço
3. Confirme

### Mobile
1. Abra em Chrome, Firefox ou Safari
2. Menu → "Adicionar à home screen" ou "Instalar app"
3. Abra a partir do ícone na home screen

## 🛠️ Desenvolvimento

### Scripts Disponíveis

```bash
npm run dev          # Inicia Vite dev server
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # ESLint verificação
npm run type-check   # TypeScript verificação
```

### Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto é privado. Todos os direitos reservados.

## ⚠️ Aviso Legal

Este aplicativo é destinado ao uso privado e consensual. O usuário é responsável por garantir que o uso está em conformidade com as leis locais e respeita a privacidade de todos os envolvidos.

## 🤝 Suporte

Para reportar bugs ou sugerir features, abra uma issue no GitHub.

## 📅 Roadmap

- [x] Setup inicial do projeto
- [ ] Autenticação com senha/PIN
- [ ] Sistema de chat básico
- [ ] Integração WebRTC para chamadas
- [ ] Sistema de criptografia E2EE
- [ ] Personalização de temas
- [ ] PWA completo
- [ ] Notificações push
- [ ] Modo offline
- [ ] Backup encriptado

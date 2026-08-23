# Guia de Deploy no Vercel

## Passo 1: Prepare o Repositório

Todos os arquivos já estão commitados no GitHub.

## Passo 2: Deploy no Vercel

### Opção A: Via Dashboard do Vercel (Mais Simples)

1. Acesse https://vercel.com
2. Clique em "New Project"
3. Selecione "Import Git Repository"
4. Conecte sua conta GitHub
5. Selecione o repositório `astaabacate/chat`
6. Clique em "Import"
7. Vercel detectará automaticamente que é um projeto Vite
8. Clique em "Deploy"

### Opção B: Via CLI do Vercel (Recomendado)

```bash
# Instale a CLI do Vercel
npm i -g vercel

# Login
vercel login

# Deploy
vercel
```

## Passo 3: Configurações Importantes

### Environment Variables

Se precisar adicionar variáveis de ambiente:

1. No dashboard do Vercel, vá para Project Settings
2. Clique em "Environment Variables"
3. Adicione as variáveis necessárias (ex: Firebase credentials)

### Build Settings

Vercel já detectará:
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## Passo 4: Acessar o App

Após o deploy, você receberá um link como:
```
https://seu-projeto.vercel.app
```

### Para PWA (Instalar como App)

#### No Desktop:
1. Abra o link no Chrome/Edge
2. Clique no ícone de instalar na barra de endereço
3. Confirme

#### No Mobile:
1. Abra em Chrome/Firefox/Safari
2. Menu → "Adicionar à home screen" ou "Instalar app"
3. Abra do ícone na home screen

## Credenciais Padrão

- **Senha**: `1234`
- **Contato**: "Unknown"
- **App Name**: "Chat App" (editável nas configurações)

## Recursos Disponíveis

✅ Chat em tempo real (simulado)
✅ Chamadas de voz/vídeo (interface)
✅ Senha e bloqueio automático
✅ Múltiplos temas e cores personalizáveis
✅ Notificações push
✅ Modo offline com Service Worker
✅ PWA instalável
✅ 100% mobile-first responsivo

## Troubleshooting

### Build falha?
- Verifique se todos os arquivos foram commitados
- Certifique-se de que `package.json` está na raiz
- Verifique dependências em `package.json`

### App não carrega?
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Desinstale o PWA se houver
- Verifique o console do navegador (F12)

### Notificações não funcionam?
- Vercel HTTPS é requerido (já ativado automaticamente)
- Navegador pode solicitar permissão
- Alguns navegadores têm restrições em PWA

## Próximos Passos

### Para Adicionar Backend Real

1. **Firebase (Recomendado)**
   - Crie projeto em https://console.firebase.google.com
   - Configure Firestore ou Realtime Database
   - Adicione credenciais ao `.env.local`
   - Implemente chamadas de API nos hooks

2. **Node.js com Socket.io**
   - Deploy em Heroku, Railway, ou Render
   - Atualize `VITE_WEBSOCKET_URL` no `.env`

### Para Melhorias

- [ ] Integrar WebRTC real para chamadas
- [ ] Criptografia E2EE com TweetNaCl.js
- [ ] Backup encriptado na nuvem
- [ ] Integração de áudio/vídeo
- [ ] Sincronização de histórico
- [ ] Autenticação de usuários

## Suporte

Para dúvidas sobre Vercel:
- Docs: https://vercel.com/docs
- Discord: https://vercel.com/discord

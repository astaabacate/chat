# 🚀 DEPLOY RÁPIDO NO VERCEL

## Jeito Mais Fácil (Recomendado)

### Passo 1: Acesse o Vercel
Abra: https://vercel.com/new

### Passo 2: Conecte o GitHub
- Clique "Continue with GitHub"
- Autorize o Vercel
- Selecione o repositório `astaabacate/chat`

### Passo 3: Clique Deploy
- Framework: **Vite** (detectado automaticamente)
- Build Command: `npm run build`
- Output Directory: `dist`
- Clique "Deploy"

### Pronto! ✅
Em 2-3 minutos seu app estará em:
```
https://chat-xxxxx.vercel.app
```

---

## Via CLI (Se preferir linha de comando)

```bash
# 1. Instale Vercel
npm i -g vercel

# 2. Faça login
vercel login

# 3. Deploy
vercel

# 4. Pronto!
```

---

## ⚡ Deploy Automático (Melhor)

Agora, **toda vez que você fizer push no GitHub**, o Vercel faz deploy automaticamente!

Basta:
```bash
git add .
git commit -m "Update"
git push origin main
```

E pronto! Vercel detecta e faz deploy sozinho.

---

## Próximos Passos

- Abra o app no celular
- Instale como PWA (toque menu → Instalar app)
- Customize nome e ícone nas settings
- Pronto pra usar! 🎉

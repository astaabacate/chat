#!/bin/bash

# Script para fazer deploy automático no Vercel

echo "🚀 Preparando para deploy no Vercel..."

# Verificar se está no repositório git
if [ ! -d ".git" ]; then
    echo "❌ Não está em um repositório Git. Execute 'git init' primeiro."
    exit 1
fi

# Verificar se tem mudanças não commitadas
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  Tem mudanças não commitadas. Faça commit primeiro:"
    echo "   git add ."
    echo "   git commit -m 'sua mensagem'"
    exit 1
fi

echo "✅ Repositório limpo"

# Instalar Vercel CLI se não existir
if ! command -v vercel &> /dev/null; then
    echo "📦 Instalando Vercel CLI..."
    npm install -g vercel
fi

echo "🔐 Fazendo login no Vercel..."
vercel login

echo "🚀 Iniciando deploy..."
vercel

echo "✅ Deploy concluído!"

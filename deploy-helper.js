#!/usr/bin/env node

/**
 * Script para verificar e ajudar no deploy
 * Execute: node deploy-helper.js
 */

const fs = require('fs')
const path = require('path')

console.log('\n🔍 Verificando configurações...\n')

const checks = [
  {
    name: 'package.json',
    check: () => fs.existsSync('package.json'),
    fix: '❌ package.json não encontrado'
  },
  {
    name: 'vite.config.ts',
    check: () => fs.existsSync('vite.config.ts'),
    fix: '❌ vite.config.ts não encontrado'
  },
  {
    name: 'vercel.json',
    check: () => fs.existsSync('vercel.json'),
    fix: '❌ vercel.json não encontrado'
  },
  {
    name: 'src/App.tsx',
    check: () => fs.existsSync('src/App.tsx'),
    fix: '❌ src/App.tsx não encontrado'
  },
  {
    name: 'public/manifest.json',
    check: () => fs.existsSync('public/manifest.json'),
    fix: '❌ public/manifest.json não encontrado'
  }
]

let allOk = true

checks.forEach(({ name, check, fix }) => {
  if (check()) {
    console.log(`✅ ${name}`)
  } else {
    console.log(fix)
    allOk = false
  }
})

console.log('\n' + '='.repeat(50) + '\n')

if (allOk) {
  console.log('✅ Tudo pronto para deploy!\n')
  console.log('Próximos passos:')
  console.log('\n1. Faça commit:')
  console.log('   git add .')
  console.log('   git commit -m "Ready for deployment"')
  console.log('   git push\n')
  console.log('2. Acesse: https://vercel.com/new')
  console.log('3. Selecione o repositório: astaabacate/chat')
  console.log('4. Clique "Deploy"\n')
  console.log('Vercel vai fazer o resto automaticamente! 🚀\n')
} else {
  console.log('⚠️  Alguns arquivos estão faltando!')
  console.log('Execute novamente após verificar os erros acima.\n')
}

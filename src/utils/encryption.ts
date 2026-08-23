// Simple encryption utilities
// For production, use proper E2EE libraries like libsodium.js

export function encryptMessage(message: string, key: string): string {
  try {
    // Simple base64 encoding for demo
    // In production, use TweetNaCl.js or libsodium.js
    const encrypted = btoa(message + '||' + key)
    return encrypted
  } catch (error) {
    console.error('Encryption error:', error)
    return message
  }
}

export function decryptMessage(encrypted: string, key: string): string {
  try {
    // Simple base64 decoding for demo
    const decrypted = atob(encrypted)
    const [message] = decrypted.split('||')
    return message
  } catch (error) {
    console.error('Decryption error:', error)
    return encrypted
  }
}

export function generateKey(): string {
  return Math.random().toString(36).substring(2, 15)
}

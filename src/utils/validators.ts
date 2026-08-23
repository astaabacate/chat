export function validatePassword(password: string): boolean {
  return password.length >= 4
}

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export function validateAppName(name: string): boolean {
  return name.length > 0 && name.length <= 20
}

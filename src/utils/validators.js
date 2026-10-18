export function isEmail(value) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(value)
}

export function isRequired(value) {
  if (value === null || value === undefined) return false
  if (typeof value === 'string') return value.trim().length > 0
  if (Array.isArray(value)) return value.length > 0
  return true
}

export function minLength(min) {
  return value => (value ? value.length >= min : false)
}

export function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value)
}

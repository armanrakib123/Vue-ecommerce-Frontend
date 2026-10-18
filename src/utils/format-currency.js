export function formatCurrency(amount, currency = 'USD', locale = 'en-US') {
  if (amount === undefined || amount === null || isNaN(Number(amount))) {
    return '$0.00'
  }
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(amount))
}

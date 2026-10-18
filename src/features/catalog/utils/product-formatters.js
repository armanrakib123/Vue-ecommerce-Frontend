import { formatCurrency } from '@/utils/format-currency.js'

export function formatProductPrice(amount) {
  return formatCurrency(amount)
}

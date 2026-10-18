export function formatCurrencyMetric(val) {
  return '$' + Number(val).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export function calculateTrend(current, previous) {
  if (!previous) return { percent: 0, direction: 'neutral' }
  const diff = ((current - previous) / previous) * 100
  return {
    percent: Math.abs(diff).toFixed(1),
    direction: diff >= 0 ? 'up' : 'down'
  }
}

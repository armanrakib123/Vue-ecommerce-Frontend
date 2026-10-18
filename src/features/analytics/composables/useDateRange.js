import { ref } from 'vue'

export function useDateRange() {
  const selectedRange = ref('30d')
  const ranges = [
    { label: 'Last 7 Days', value: '7d' },
    { label: 'Last 30 Days', value: '30d' },
    { label: 'Quarter to Date', value: 'qtd' },
    { label: 'Year to Date', value: 'ytd' }
  ]
  return { selectedRange, ranges }
}

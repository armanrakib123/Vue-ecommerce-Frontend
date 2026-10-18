import { ref } from 'vue'

export function useSalesReport() {
  const salesData = ref([
    { period: 'Week 1', sales: 48200, orders: 198 },
    { period: 'Week 2', sales: 54100, orders: 221 },
    { period: 'Week 3', sales: 62400, orders: 260 },
    { period: 'Week 4', sales: 71200, orders: 294 }
  ])
  return { salesData }
}

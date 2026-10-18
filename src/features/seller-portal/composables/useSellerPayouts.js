import { ref } from 'vue'

export function useSellerPayouts() {
  const payouts = ref([
    { id: 'pay_1', period: 'Oct 01 - Oct 15, 2026', amount: 38400.00, status: 'deposited', date: 'Oct 17, 2026' },
    { id: 'pay_2', period: 'Sep 16 - Sep 30, 2026', amount: 41200.00, status: 'deposited', date: 'Oct 02, 2026' },
    { id: 'pay_3', period: 'Sep 01 - Sep 15, 2026', amount: 35900.00, status: 'deposited', date: 'Sep 17, 2026' }
  ])

  const pendingBalance = ref(14650.00)
  return { payouts, pendingBalance }
}

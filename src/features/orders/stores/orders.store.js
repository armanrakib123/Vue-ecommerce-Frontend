import { defineStore } from 'pinia'
import { ref } from 'vue'
import { mockOrders } from '@/mocks/fixtures/orders.json.js'

export const useOrdersStore = defineStore('orders', () => {
  const orders = ref([...mockOrders])
  return { orders }
})

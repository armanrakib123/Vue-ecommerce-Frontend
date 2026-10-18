import { ref } from 'vue'

export function useShippingOptions() {
  const shippingMethods = ref([
    { id: 'standard', name: 'Standard Courier (3-5 Business Days)', price: 9.99, carrier: 'FedEx Ground' },
    { id: 'express', name: 'Priority Air Express (1-2 Days)', price: 18.00, carrier: 'DHL Express' },
    { id: 'overnight', name: 'Next-Day Guaranteed', price: 29.99, carrier: 'UPS Next Day' }
  ])
  const selectedMethod = ref('standard')

  return { shippingMethods, selectedMethod }
}

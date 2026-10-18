import { ref } from 'vue'

export function useRewards() {
  const rewards = ref([
    { id: 'rew_1', title: '$25 Digital Voucher', cost: 500, description: 'Applicable to any studio hardware or accessories.' },
    { id: 'rew_2', title: 'Free Global Express Shipping', cost: 350, description: 'One-time waiver of air express logistics.' },
    { id: 'rew_3', title: 'Exclusive Nexora Studio Cap', cost: 1200, description: 'Embroidered heavyweight cotton merchandise.' },
    { id: 'rew_4', title: '$100 Flagship Discount', cost: 2000, description: 'Valid on purchases above $400.' }
  ])

  return { rewards }
}

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCheckoutStore = defineStore('checkout', () => {
  const currentStep = ref(1)
  const shippingAddress = ref({})
  const paymentMethod = ref('card')

  function setStep(s) { currentStep.value = s }
  return { currentStep, shippingAddress, paymentMethod, setStep }
})

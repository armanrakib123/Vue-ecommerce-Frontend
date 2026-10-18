import { ref } from 'vue'

export function useAddresses() {
  const addresses = ref([
    { id: '1', fullName: 'Sarah Connor', street: '742 Evergreen Terrace', city: 'San Francisco', state: 'CA', postalCode: '94107' }
  ])
  return { addresses }
}

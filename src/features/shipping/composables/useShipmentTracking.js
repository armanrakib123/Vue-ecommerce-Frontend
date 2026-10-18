import { ref } from 'vue'

export function useShipmentTracking() {
  const trackingData = ref(null)
  const loading = ref(false)

  async function fetchTracking(number) {
    loading.value = true
    try {
      // Simulated tracking fetch
      trackingData.value = {
        trackingNumber: number,
        carrier: 'FedEx Express',
        status: 'in_transit',
        estimatedDelivery: 'Oct 24, 2026',
        destination: 'San Francisco, CA 94107',
        timeline: [
          { time: '10:45 AM, Today', status: 'In Transit - Arrived at Hub', location: 'Oakland, CA' },
          { time: '04:15 PM, Yesterday', status: 'Departed Facility', location: 'Memphis, TN' },
          { time: '09:30 AM, 2 Days ago', status: 'Picked Up by Carrier', location: 'Fulfillment Center 1' }
        ]
      }
    } finally {
      loading.value = false
    }
  }

  return { trackingData, loading, fetchTracking }
}

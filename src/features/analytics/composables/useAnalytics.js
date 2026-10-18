import { ref } from 'vue'

export function useAnalytics() {
  const kpis = ref([
    { label: 'Gross Merchandise Value', value: '$348,920.00', change: '+22.4%', direction: 'up' },
    { label: 'Total Orders Completed', value: '1,429', change: '+14.1%', direction: 'up' },
    { label: 'Average Order Value (AOV)', value: '$244.17', change: '+7.2%', direction: 'up' },
    { label: 'Checkout Conversion Rate', value: '3.82%', change: '+0.4%', direction: 'up' }
  ])

  const topProducts = ref([
    { name: 'AuraStudio Pro Wireless Headphones', revenue: 98450.00, units: 395, conversion: '4.8%' },
    { name: 'Chronos Titanium GPS Smartwatch', revenue: 64200.00, units: 143, conversion: '3.9%' },
    { name: 'Lumina Arc Ergonomic LED Bar', revenue: 38900.00, units: 299, conversion: '5.2%' },
    { name: 'Apex Carbon Ergonomic Desk Mat', revenue: 21400.00, units: 436, conversion: '6.1%' }
  ])

  return { kpis, topProducts }
}

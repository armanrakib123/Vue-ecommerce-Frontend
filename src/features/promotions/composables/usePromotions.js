import { ref } from 'vue'

export function usePromotions() {
  const campaigns = ref([
    {
      id: 'cmp_1',
      title: 'Audiophile Master Series',
      subtitle: 'Complimentary hardcase with every headphone purchase',
      discount: 'FREE GIFT',
      badge: 'Exclusive',
      bgClass: 'from-purple-900 to-indigo-900'
    },
    {
      id: 'cmp_2',
      title: 'Minimalist Workspace Refresh',
      subtitle: 'Bundle desk mat + monitor arm for instant 25% off',
      discount: '25% OFF',
      badge: 'Bundle Deal',
      bgClass: 'from-slate-900 to-slate-800'
    }
  ])
  return { campaigns }
}

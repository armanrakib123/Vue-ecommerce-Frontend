import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AnalyticsOverview from '../components/AnalyticsOverview.vue'

describe('AnalyticsOverview.vue', () => {
  it('renders KPI metrics cards', () => {
    const wrapper = mount(AnalyticsOverview, {
      props: {
        kpis: [{ label: 'Gross GMV', value: '$100,000', change: '+10%' }]
      }
    })
    expect(wrapper.text()).toContain('Gross GMV')
    expect(wrapper.text()).toContain('$100,000')
  })
})

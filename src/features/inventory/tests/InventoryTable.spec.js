import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InventoryTable from '../components/InventoryTable.vue'

describe('InventoryTable.vue', () => {
  it('renders table headers and rows', () => {
    const wrapper = mount(InventoryTable, {
      props: {
        inventory: [{ sku: 'SKU-1', name: 'Product 1', stockOnHand: 50, allocated: 5, available: 45 }]
      }
    })
    expect(wrapper.text()).toContain('Global Warehousing Stock Control')
    expect(wrapper.text()).toContain('SKU-1')
  })
})

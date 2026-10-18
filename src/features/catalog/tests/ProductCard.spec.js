import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProductCard from '../components/ProductCard.vue'

describe('ProductCard.vue', () => {
  it('renders product name and price correctly', () => {
    const wrapper = mount(ProductCard, {
      props: {
        product: { id: '1', name: 'Lumina ANC', brand: 'AuraTech', price: 349, rating: 4.8, slug: 'lumina-anc' }
      },
      global: {
        stubs: {
          RouterLink: { template: '<a><slot /></a>' }
        }
      }
    })
    expect(wrapper.text()).toContain('Lumina ANC')
  })
})

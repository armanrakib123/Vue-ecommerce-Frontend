import { describe, it, expect } from 'vitest'
import { catalogApi } from '../api/catalog.api.js'

describe('catalog.api.js', () => {
  it('fetches products successfully', async () => {
    const res = await catalogApi.getProducts()
    expect(res.data.data.length).toBeGreaterThan(0)
  })
})

export function createMockProduct(overrides = {}) {
  return {
    id: `prod_${Date.now()}`,
    slug: 'aurastudio-pro-wireless',
    name: 'AuraStudio Pro Wireless Headphones',
    tagline: 'Precision engineered studio acoustics',
    description: 'High fidelity studio monitoring with aerospace titanium frame.',
    brand: 'AuraTech',
    price: 349.00,
    originalPrice: 399.00,
    category: 'electronics',
    inStock: true,
    rating: 4.9,
    reviewsCount: 128,
    sku: 'AUR-HP-001',
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800'],
    variants: [
      { name: 'Matte Obsidian', price: 349.00, inStock: true }
    ],
    ...overrides
  }
}

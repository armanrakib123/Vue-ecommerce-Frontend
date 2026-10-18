export function transformProductCard(p) {
  return {
    id: p.id,
    name: p.name,
    price: p.price,
    thumbnail: p.thumbnail || p.images?.[0],
    rating: p.rating || 5.0,
    slug: p.slug
  }
}

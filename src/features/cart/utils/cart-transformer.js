export function formatCartItem(item) {
  return { ...item, itemTotal: item.price * item.quantity }
}

export function calculateCartTotals(items, discount = 0, shipping = 0, taxRate = 0.0825) {
  const subtotal = items.reduce((acc, i) => acc + (i.price * i.quantity), 0)
  const taxable = Math.max(0, subtotal - discount)
  const tax = taxable * taxRate
  const total = taxable + shipping + tax
  return { subtotal, tax, total }
}

export const TRACKING_STATUSES = {
  LABEL_CREATED: 'label_created',
  PICKED_UP: 'picked_up',
  IN_TRANSIT: 'in_transit',
  OUT_FOR_DELIVERY: 'out_for_delivery',
  DELIVERED: 'delivered',
  EXCEPTION: 'exception'
}

export function formatTrackingStatus(status) {
  const map = {
    label_created: { label: 'Shipping Label Created', color: 'text-slate-500 bg-slate-100' },
    picked_up: { label: 'Carrier Received Package', color: 'text-sky-600 bg-sky-50' },
    in_transit: { label: 'In Transit', color: 'text-amber-600 bg-amber-50' },
    out_for_delivery: { label: 'Out for Delivery', color: 'text-indigo-600 bg-indigo-50' },
    delivered: { label: 'Delivered', color: 'text-emerald-600 bg-emerald-50' },
    exception: { label: 'Delivery Exception', color: 'text-rose-600 bg-rose-50' }
  }
  return map[status] || { label: status, color: 'text-slate-600 bg-slate-100' }
}

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
    <div>
      <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Special Offers & Promotions</h1>
      <p class="text-xs text-slate-500">Official coupon vouchers and limited seasonal campaigns</p>
    </div>
    <PromotionBanner title="Cyber Wave 2026 Season" subtitle="Unlock 20% discount on all flagship headphones and studio monitors." code="FALL20" />
    <CouponList :coupons="coupons" @apply="onApply" />
  </div>
</template>
<script setup>
import PromotionBanner from '../components/PromotionBanner.vue'
import CouponList from '../components/CouponList.vue'
import { useCoupons } from '../composables/useCoupons.js'
import { useCartStore } from '@/stores/cart.store.js'
import { useNotificationStore } from '@/stores/notification.store.js'

const { coupons } = useCoupons()
const cartStore = useCartStore()
const notificationStore = useNotificationStore()

function onApply(coupon) {
  cartStore.applyCoupon(coupon)
  notificationStore.success(`Coupon ${coupon.code} activated!`)
}
</script>

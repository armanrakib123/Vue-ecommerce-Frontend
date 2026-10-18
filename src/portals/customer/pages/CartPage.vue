<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
    <Breadcrumbs :items="[{ label: 'Home', to: '/' }, { label: 'Shopping Cart' }]" />

    <div class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-black text-slate-900 dark:text-white font-display">
        Your Shopping Cart
      </h1>
      <p class="text-xs text-slate-500 mt-1">Review your hardware selections and configure shipping</p>
    </div>

    <!-- Empty State -->
    <div v-if="cartStore.items.length === 0" class="py-16">
      <BaseEmptyState
        title="Your cart is currently empty"
        description="You have no items in your cart. Explore our curated collections to get started."
      >
        <template #action>
          <RouterLink
            to="/products"
            class="px-5 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs shadow-sm hover:bg-brand-700 transition"
          >
            Start Shopping
          </RouterLink>
        </template>
      </BaseEmptyState>
    </div>

    <!-- Filled Cart Layout -->
    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Items List -->
      <div class="lg:col-span-2 space-y-4">
        <div
          v-for="item in cartStore.items"
          :key="item.id"
          class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div class="flex items-center gap-4 min-w-0">
            <img :src="item.image" :alt="item.name" class="w-20 h-20 rounded-xl object-cover bg-slate-100 dark:bg-slate-800 flex-shrink-0" />
            <div class="min-w-0">
              <RouterLink :to="`/products/${item.slug}`" class="text-sm font-bold text-slate-900 dark:text-slate-100 hover:text-brand-600 transition truncate block">
                {{ item.name }}
              </RouterLink>
              <p class="text-xs text-slate-400 mt-0.5">Finish: {{ item.variantName }}</p>
              <p class="text-xs font-bold text-brand-600 dark:text-brand-400 mt-1">{{ formatCurrency(item.price) }} each</p>
            </div>
          </div>

          <!-- Quantity Stepper & Subtotal -->
          <div class="flex items-center justify-between w-full sm:w-auto gap-6 self-end sm:self-center">
            <div class="flex items-center border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-800/60 p-1">
              <button
                type="button"
                class="w-7 h-7 rounded-lg flex items-center justify-center text-slate-500 hover:bg-white dark:hover:bg-slate-700 font-bold text-xs"
                @click="cartStore.updateQuantity(item.id, item.quantity - 1)"
              >
                -
              </button>
              <span class="w-8 text-center text-xs font-bold">{{ item.quantity }}</span>
              <button
                type="button"
                class="w-7 h-7 rounded-lg flex items-center justify-center text-slate-500 hover:bg-white dark:hover:bg-slate-700 font-bold text-xs"
                @click="cartStore.updateQuantity(item.id, item.quantity + 1)"
              >
                +
              </button>
            </div>

            <div class="text-right">
              <p class="text-sm font-extrabold text-slate-900 dark:text-white">
                {{ formatCurrency(item.price * item.quantity) }}
              </p>
            </div>

            <button
              type="button"
              class="text-slate-400 hover:text-rose-500 p-1 rounded-lg"
              title="Remove item"
              @click="cartStore.removeItem(item.id)"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Coupon input -->
        <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div class="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="text"
              v-model="couponCode"
              placeholder="Promo code (e.g. NEXORA20)"
              class="uppercase text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 w-full sm:w-60 focus:ring-2 focus:ring-brand-500 outline-none"
            />
            <BaseButton variant="secondary" size="sm" @click="handleApplyCoupon">
              Apply
            </BaseButton>
          </div>
          <p v-if="cartStore.appliedCoupon" class="text-xs text-emerald-600 font-semibold flex items-center gap-1">
            <span>✓ Coupon applied: {{ cartStore.appliedCoupon.code }} ({{ cartStore.appliedCoupon.description }})</span>
            <button class="text-slate-400 hover:text-rose-500 text-xs ml-1" @click="cartStore.removeCoupon">Remove</button>
          </p>
        </div>
      </div>

      <!-- Order Summary Card -->
      <div class="lg:col-span-1">
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4 sticky top-24">
          <h3 class="text-base font-bold text-slate-900 dark:text-white">Order Summary</h3>

          <div class="space-y-2.5 text-xs text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div class="flex justify-between">
              <span>Item Subtotal</span>
              <span class="font-bold text-slate-900 dark:text-slate-100">{{ formatCurrency(cartStore.subtotal) }}</span>
            </div>
            <div v-if="cartStore.discountAmount > 0" class="flex justify-between text-emerald-600">
              <span>Promotional Discount</span>
              <span class="font-bold">-{{ formatCurrency(cartStore.discountAmount) }}</span>
            </div>
            <div class="flex justify-between">
              <span>Estimated Shipping</span>
              <span class="font-bold text-slate-900 dark:text-slate-100">
                {{ cartStore.shippingCost === 0 ? 'FREE' : formatCurrency(cartStore.shippingCost) }}
              </span>
            </div>
            <div class="flex justify-between">
              <span>Estimated Sales Tax</span>
              <span class="font-bold text-slate-900 dark:text-slate-100">{{ formatCurrency(cartStore.estimatedTax) }}</span>
            </div>
          </div>

          <div class="flex justify-between items-baseline pt-1">
            <span class="text-sm font-bold text-slate-900 dark:text-white">Total Amount</span>
            <span class="text-2xl font-black text-brand-600 dark:text-brand-400 font-display">
              {{ formatCurrency(cartStore.grandTotal) }}
            </span>
          </div>

          <BaseButton variant="primary" size="lg" full-width @click="$router.push('/checkout')">
            Proceed to Checkout →
          </BaseButton>

          <p class="text-[11px] text-center text-slate-400">
            🔒 Bank-grade 256-bit SSL encrypted checkout
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart.store.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import { formatCurrency } from '@/utils/format-currency.js'
import apiClient from '@/services/http/client.js'
import Breadcrumbs from '@/components/navigation/Breadcrumbs.vue'
import BaseEmptyState from '@/components/ui/BaseEmptyState.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const cartStore = useCartStore()
const notificationStore = useNotificationStore()
const couponCode = ref('')

async function handleApplyCoupon() {
  if (!couponCode.value.trim()) return
  try {
    const res = await apiClient.post('/promotions/validate-coupon', { code: couponCode.value.trim() })
    cartStore.applyCoupon(res.data)
    notificationStore.success(`Coupon ${res.data.code} applied successfully!`)
    couponCode.value = ''
  } catch (e) {
    notificationStore.error(e.message || 'Invalid coupon code')
  }
}
</script>

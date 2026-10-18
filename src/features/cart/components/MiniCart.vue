<template>
  <BaseDrawer
    :is-open="uiStore.isMiniCartOpen"
    title="Shopping Cart"
    placement="right"
    width="md"
    @close="uiStore.setMiniCart(false)"
  >
    <div v-if="cartStore.items.length === 0" class="h-full flex flex-col items-center justify-center text-center p-6">
      <div class="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-4">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </div>
      <h3 class="text-base font-bold text-slate-900 dark:text-slate-100 mb-1">Your cart is empty</h3>
      <p class="text-xs text-slate-500 mb-6 max-w-xs">Looks like you haven't added anything to your cart yet.</p>
      <BaseButton variant="primary" size="sm" @click="goToProducts">
        Explore Catalog
      </BaseButton>
    </div>

    <div v-else class="space-y-4">
      <div
        v-for="item in cartStore.items"
        :key="item.id"
        class="flex gap-3.5 p-3 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm"
      >
        <img
          :src="item.image"
          :alt="item.name"
          class="w-16 h-16 rounded-xl object-cover bg-slate-100 dark:bg-slate-800 flex-shrink-0"
        />
        <div class="flex-1 min-w-0">
          <h4 class="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">{{ item.name }}</h4>
          <p class="text-[11px] text-slate-400 mb-2">{{ item.variantName }}</p>
          <div class="flex items-center justify-between">
            <span class="text-xs font-extrabold text-brand-600 dark:text-brand-400">
              {{ formatCurrency(item.price) }}
            </span>
            <div class="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
              <button
                type="button"
                class="px-2 py-0.5 text-xs text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                @click="cartStore.updateQuantity(item.id, item.quantity - 1)"
              >
                -
              </button>
              <span class="px-2 text-xs font-semibold">{{ item.quantity }}</span>
              <button
                type="button"
                class="px-2 py-0.5 text-xs text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                @click="cartStore.updateQuantity(item.id, item.quantity + 1)"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="text-slate-400 hover:text-rose-500 self-start p-1"
          @click="cartStore.removeItem(item.id)"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <template #footer v-if="cartStore.items.length > 0">
      <div class="w-full space-y-3">
        <div class="flex justify-between items-baseline text-sm">
          <span class="text-slate-500 font-medium">Subtotal</span>
          <span class="font-extrabold text-slate-900 dark:text-slate-100 text-base">
            {{ formatCurrency(cartStore.subtotal) }}
          </span>
        </div>
        <p class="text-[11px] text-slate-400">Taxes, shipping and coupon calculated at checkout.</p>
        <div class="grid grid-cols-2 gap-2">
          <BaseButton variant="outline" size="sm" @click="goToCart">
            View Cart
          </BaseButton>
          <BaseButton variant="primary" size="sm" @click="goToCheckout">
            Checkout
          </BaseButton>
        </div>
      </div>
    </template>
  </BaseDrawer>
</template>

<script setup>
import { useRouter } from 'vue-router'
import BaseDrawer from '@/components/ui/BaseDrawer.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useCartStore } from '@/stores/cart.store.js'
import { useUiStore } from '@/stores/ui.store.js'
import { formatCurrency } from '@/utils/format-currency.js'

const cartStore = useCartStore()
const uiStore = useUiStore()
const router = useRouter()

function goToProducts() {
  uiStore.setMiniCart(false)
  router.push('/products')
}

function goToCart() {
  uiStore.setMiniCart(false)
  router.push('/cart')
}

function goToCheckout() {
  uiStore.setMiniCart(false)
  router.push('/checkout')
}
</script>

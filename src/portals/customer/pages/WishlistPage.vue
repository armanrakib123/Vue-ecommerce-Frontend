<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h2 class="text-xl font-black text-slate-900 dark:text-white font-display">My Wishlist</h2>
        <p class="text-xs text-slate-500">Products you've saved for future drops and restocks</p>
      </div>
      <span class="text-xs font-bold text-slate-400">{{ wishlistStore.items.length }} items</span>
    </div>

    <div v-if="wishlistStore.items.length === 0" class="py-12">
      <BaseEmptyState
        title="Your Wishlist is Empty"
        description="Explore the catalog and tap the heart icon on any product to save it here."
      >
        <template #action>
          <RouterLink to="/products" class="px-4 py-2 rounded-xl bg-brand-600 text-white text-xs font-bold">
            Explore Hardware
          </RouterLink>
        </template>
      </BaseEmptyState>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="prod in wishlistStore.items"
        :key="prod.id"
        class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm flex flex-col justify-between"
      >
        <div class="relative aspect-square overflow-hidden bg-slate-100">
          <img :src="prod.thumbnail" :alt="prod.name" class="w-full h-full object-cover" />
          <button
            type="button"
            class="absolute top-2.5 right-2.5 p-2 rounded-full bg-white/90 dark:bg-slate-900/90 text-rose-500"
            @click="wishlistStore.removeFromWishlist(prod.id)"
          >
            ✕
          </button>
        </div>

        <div class="p-4 flex-1 flex flex-col justify-between">
          <div>
            <span class="text-[10px] text-slate-400 uppercase font-bold">{{ prod.brand }}</span>
            <RouterLink :to="`/products/${prod.slug}`" class="block">
              <h4 class="text-xs font-bold text-slate-900 dark:text-white truncate">{{ prod.name }}</h4>
            </RouterLink>
            <PriceDisplay :price="prod.price" size="sm" class="mt-2" />
          </div>

          <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex gap-2">
            <BaseButton variant="primary" size="xs" full-width @click="moveToCart(prod)">
              Move to Cart
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWishlistStore } from '@/stores/wishlist.store.js'
import { useCartStore } from '@/stores/cart.store.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import BaseEmptyState from '@/components/ui/BaseEmptyState.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import PriceDisplay from '@/components/data-display/PriceDisplay.vue'

const wishlistStore = useWishlistStore()
const cartStore = useCartStore()
const notificationStore = useNotificationStore()

function moveToCart(prod) {
  cartStore.addItem(prod)
  wishlistStore.removeFromWishlist(prod.id)
  notificationStore.success(`Moved ${prod.name} to cart!`)
}
</script>

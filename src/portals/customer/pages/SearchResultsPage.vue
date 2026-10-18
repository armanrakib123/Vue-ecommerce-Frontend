<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
    <Breadcrumbs :items="[{ label: 'Home', to: '/' }, { label: 'Search Results' }]" />

    <div class="border-b border-slate-200 dark:border-slate-800 pb-4 flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">
          Search Results for "{{ searchQuery }}"
        </h1>
        <p class="text-xs text-slate-500 mt-1">Found {{ results.length }} matching products</p>
      </div>
    </div>

    <div v-if="results.length === 0" class="py-16">
      <BaseEmptyState
        title="No Results Found"
        :description="`We could not find any products matching '${searchQuery}'. Try another keyword.`"
      >
        <template #action>
          <RouterLink to="/products" class="px-4 py-2 bg-brand-600 text-white rounded-xl text-xs font-bold">
            Explore All Hardware
          </RouterLink>
        </template>
      </BaseEmptyState>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div
        v-for="prod in results"
        :key="prod.id"
        class="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col justify-between"
      >
        <div class="relative aspect-square overflow-hidden bg-slate-100">
          <RouterLink :to="`/products/${prod.slug}`">
            <img :src="prod.thumbnail" :alt="prod.name" class="w-full h-full object-cover group-hover:scale-105 transition" />
          </RouterLink>
        </div>
        <div class="p-4 flex-1 flex flex-col justify-between">
          <div>
            <span class="text-[10px] text-slate-400 font-bold uppercase">{{ prod.brand }}</span>
            <RouterLink :to="`/products/${prod.slug}`" class="block">
              <h3 class="text-xs font-bold text-slate-900 dark:text-white truncate mt-0.5">{{ prod.name }}</h3>
            </RouterLink>
            <PriceDisplay :price="prod.price" size="sm" class="mt-2" />
          </div>
          <div class="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
            <BaseButton variant="primary" size="xs" full-width @click="addToCart(prod)">
              + Add to Cart
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { mockProducts } from '@/mocks/fixtures/products.json.js'
import { useCartStore } from '@/stores/cart.store.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import Breadcrumbs from '@/components/navigation/Breadcrumbs.vue'
import BaseEmptyState from '@/components/ui/BaseEmptyState.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import PriceDisplay from '@/components/data-display/PriceDisplay.vue'

const route = useRoute()
const cartStore = useCartStore()
const notificationStore = useNotificationStore()

const searchQuery = computed(() => route.query.q || '')

const results = computed(() => {
  const q = searchQuery.value.toLowerCase().trim()
  if (!q) return mockProducts
  return mockProducts.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q)
  )
})

function addToCart(prod) {
  cartStore.addItem(prod)
  notificationStore.success(`Added ${prod.name} to cart`)
}
</script>

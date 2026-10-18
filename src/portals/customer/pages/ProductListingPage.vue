<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
    <Breadcrumbs :items="[{ label: 'Catalog', to: '/products' }, { label: currentCategoryName }]" />

    <!-- Header and Toolbar -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
      <div>
        <h1 class="text-3xl font-black text-slate-900 dark:text-white font-display">
          {{ currentCategoryName }}
        </h1>
        <p class="text-xs text-slate-500 mt-1">Showing {{ filteredProducts.length }} precision products</p>
      </div>

      <div class="flex flex-wrap items-center gap-3">
        <!-- Filter by Category -->
        <select
          v-model="selectedCategory"
          class="px-3.5 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl font-medium focus:ring-2 focus:ring-brand-500 outline-none"
        >
          <option value="all">All Categories</option>
          <option v-for="cat in mockCategories" :key="cat.slug" :value="cat.slug">
            {{ cat.name }}
          </option>
        </select>

        <!-- Sort -->
        <select
          v-model="selectedSort"
          class="px-3.5 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl font-medium focus:ring-2 focus:ring-brand-500 outline-none"
        >
          <option value="featured">Featured First</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>
    </div>

    <!-- Product Grid -->
    <div v-if="filteredProducts.length === 0" class="py-16">
      <BaseEmptyState
        title="No Products Match Your Filter"
        description="Try adjusting your category selection or search keywords."
      >
        <template #action>
          <button
            type="button"
            class="px-4 py-2 bg-brand-600 text-white rounded-xl text-xs font-bold"
            @click="selectedCategory = 'all'"
          >
            Reset Filters
          </button>
        </template>
      </BaseEmptyState>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div
        v-for="prod in filteredProducts"
        :key="prod.id"
        class="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
      >
        <div class="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800">
          <RouterLink :to="`/products/${prod.slug}`">
            <img
              :src="prod.thumbnail"
              :alt="prod.name"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </RouterLink>
          <button
            type="button"
            class="absolute top-2.5 right-2.5 p-2 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm hover:scale-110 active:scale-95 transition"
            @click.stop="wishlistStore.toggleWishlist(prod)"
          >
            <svg
              class="w-4 h-4"
              :class="wishlistStore.isInWishlist(prod.id) ? 'text-rose-600 fill-rose-600' : 'text-slate-400 hover:text-rose-500'"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <span
            v-if="prod.discountPercentage"
            class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-rose-600 text-white text-[10px] font-bold uppercase"
          >
            -{{ prod.discountPercentage }}%
          </span>
        </div>

        <div class="p-4 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-[11px] text-slate-400 mb-1">
              <span>{{ prod.brand }}</span>
              <span class="text-amber-500 font-bold">★ {{ prod.rating }}</span>
            </div>
            <RouterLink :to="`/products/${prod.slug}`">
              <h3 class="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-600 transition line-clamp-1">
                {{ prod.name }}
              </h3>
            </RouterLink>
            <p class="text-[11px] text-slate-500 mt-1 line-clamp-2">
              {{ prod.tagline }}
            </p>
          </div>

          <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <PriceDisplay :price="prod.price" :original-price="prod.originalPrice" size="sm" />
            <button
              type="button"
              class="px-3 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold transition shadow-sm active:scale-95"
              @click="handleAddToCart(prod)"
            >
              + Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { mockProducts } from '@/mocks/fixtures/products.json.js'
import { mockCategories } from '@/mocks/fixtures/categories.json.js'
import { useCartStore } from '@/stores/cart.store.js'
import { useWishlistStore } from '@/stores/wishlist.store.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import Breadcrumbs from '@/components/navigation/Breadcrumbs.vue'
import BaseEmptyState from '@/components/ui/BaseEmptyState.vue'
import PriceDisplay from '@/components/data-display/PriceDisplay.vue'

const route = useRoute()
const cartStore = useCartStore()
const wishlistStore = useWishlistStore()
const notificationStore = useNotificationStore()

const selectedCategory = ref(route.params.slug || 'all')
const selectedSort = ref('featured')

const currentCategoryName = computed(() => {
  if (selectedCategory.value === 'all') return 'All Products'
  const found = mockCategories.find(c => c.slug === selectedCategory.value)
  return found ? found.name : 'Catalog'
})

const filteredProducts = computed(() => {
  let list = [...mockProducts]
  if (selectedCategory.value !== 'all') {
    list = list.filter(p => p.category === selectedCategory.value)
  }
  if (selectedSort.value === 'price-asc') list.sort((a, b) => a.price - b.price)
  if (selectedSort.value === 'price-desc') list.sort((a, b) => b.price - a.price)
  if (selectedSort.value === 'rating') list.sort((a, b) => b.rating - a.rating)
  return list
})

function handleAddToCart(prod) {
  cartStore.addItem(prod)
  notificationStore.success(`Added ${prod.name} to cart`)
}
</script>

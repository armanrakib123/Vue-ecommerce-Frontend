<template>
  <div class="space-y-16 pb-20">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-slate-900 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 mt-6">
      <div class="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-slate-900/90 to-slate-950/95 z-10" />
      <img
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&auto=format&fit=crop&q=80"
        alt="Hero Audio"
        class="absolute inset-0 w-full h-full object-cover object-center mix-blend-overlay opacity-30"
      />
      <div class="relative z-20 max-w-4xl px-8 py-20 sm:px-12 sm:py-28 lg:py-32">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/20 text-brand-300 border border-brand-500/30 mb-6">
          <span class="w-2 h-2 rounded-full bg-brand-400 animate-ping" />
          Autumn 2026 Innovation Drop
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 font-display">
          Precision Engineering for Modern Lifestyle.
        </h1>
        <p class="text-base sm:text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed">
          Explore studio-grade acoustics, aerospace titanium wearables, and minimalist workspace illumination engineered for creative professionals.
        </p>
        <div class="flex flex-wrap items-center gap-4">
          <RouterLink
            to="/products"
            class="px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm transition shadow-lg shadow-brand-500/30 hover:scale-105 active:scale-95"
          >
            Explore Catalog
          </RouterLink>
          <RouterLink
            to="/categories/electronics"
            class="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm backdrop-blur-md transition border border-white/10"
          >
            Audio & Electronics
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Value Props -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
          <div class="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 flex items-center justify-center font-bold">
            ✈
          </div>
          <div>
            <h4 class="text-xs font-bold text-slate-900 dark:text-white">Global Express</h4>
            <p class="text-[11px] text-slate-500">Free delivery over $150</p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
          <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center font-bold">
            🛡
          </div>
          <div>
            <h4 class="text-xs font-bold text-slate-900 dark:text-white">2-Year Warranty</h4>
            <p class="text-[11px] text-slate-500">Full manufacturer shield</p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
          <div class="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center font-bold">
            ↺
          </div>
          <div>
            <h4 class="text-xs font-bold text-slate-900 dark:text-white">30-Day Returns</h4>
            <p class="text-[11px] text-slate-500">No questions asked policy</p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
          <div class="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 flex items-center justify-center font-bold">
            ★
          </div>
          <div>
            <h4 class="text-xs font-bold text-slate-900 dark:text-white">VIP Loyalty</h4>
            <p class="text-[11px] text-slate-500">Earn points on every buy</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Showcase -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-end justify-between mb-8">
        <div>
          <h2 class="text-2xl font-black tracking-tight text-slate-900 dark:text-white font-display">
            Curated Categories
          </h2>
          <p class="text-xs text-slate-500">Engineered collections for your home, body, and bag</p>
        </div>
        <RouterLink to="/products" class="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline">
          View All Products →
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <RouterLink
          v-for="cat in categories"
          :key="cat.slug"
          :to="`/categories/${cat.slug}`"
          class="group relative h-64 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <img
            :src="cat.image"
            :alt="cat.name"
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
          <div class="absolute bottom-5 left-5 right-5 text-white">
            <span class="text-[10px] uppercase font-bold tracking-widest text-brand-300">
              {{ cat.productCount }} Items
            </span>
            <h3 class="text-lg font-bold group-hover:text-brand-300 transition-colors">
              {{ cat.name }}
            </h3>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-end justify-between mb-8">
        <div>
          <div class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-1">
            ★ Hand-Picked Highlights
          </div>
          <h2 class="text-2xl font-black tracking-tight text-slate-900 dark:text-white font-display">
            Trending Hardware
          </h2>
        </div>
        <RouterLink to="/products" class="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline">
          Browse Catalog →
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="prod in featuredProducts"
          :key="prod.id"
          class="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
        >
          <!-- Thumbnail & Quick Wishlist -->
          <div class="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800">
            <img
              :src="prod.thumbnail"
              :alt="prod.name"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <button
              type="button"
              class="absolute top-3 right-3 p-2 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm hover:scale-110 active:scale-95 transition"
              :title="wishlistStore.isInWishlist(prod.id) ? 'Remove from Wishlist' : 'Add to Wishlist'"
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
              class="absolute top-3 left-3 px-2 py-0.5 rounded-lg bg-rose-600 text-white text-[10px] font-bold uppercase tracking-wider shadow"
            >
              -{{ prod.discountPercentage }}% OFF
            </span>
          </div>

          <!-- Product Details -->
          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                <span>{{ prod.brand }}</span>
                <span class="flex items-center text-amber-500 font-bold">★ {{ prod.rating }} ({{ prod.reviewsCount }})</span>
              </div>
              <RouterLink :to="`/products/${prod.slug}`" class="block">
                <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-600 transition line-clamp-1">
                  {{ prod.name }}
                </h3>
              </RouterLink>
              <p class="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                {{ prod.tagline }}
              </p>
            </div>

            <div class="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <PriceDisplay :price="prod.price" :original-price="prod.originalPrice" size="md" />
              <button
                type="button"
                class="px-3.5 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold transition shadow-sm active:scale-95"
                @click="addToCart(prod)"
              >
                + Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { mockCategories } from '@/mocks/fixtures/categories.json.js'
import { mockProducts } from '@/mocks/fixtures/products.json.js'
import { useCartStore } from '@/stores/cart.store.js'
import { useWishlistStore } from '@/stores/wishlist.store.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import PriceDisplay from '@/components/data-display/PriceDisplay.vue'

const cartStore = useCartStore()
const wishlistStore = useWishlistStore()
const notificationStore = useNotificationStore()

const categories = mockCategories
const featuredProducts = computed(() => mockProducts.slice(0, 6))

function addToCart(product) {
  cartStore.addItem(product)
  notificationStore.success(`Added ${product.name} to cart`)
}
</script>

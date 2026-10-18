<template>
  <div v-if="product" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
    <Breadcrumbs :items="[{ label: 'Catalog', to: '/products' }, { label: product.categoryName, to: `/categories/${product.category}` }, { label: product.name }]" />

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <!-- Left: Image Gallery -->
      <div class="space-y-4">
        <div class="aspect-square rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <img
            :src="activeImage"
            :alt="product.name"
            class="w-full h-full object-cover object-center transition-all duration-300"
          />
        </div>
        <div class="flex items-center gap-3 overflow-x-auto pb-2">
          <button
            v-for="(img, idx) in product.images"
            :key="idx"
            type="button"
            class="w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0"
            :class="activeImage === img ? 'border-brand-600 scale-95 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'"
            @click="activeImage = img"
          >
            <img :src="img" :alt="`Thumbnail ${idx}`" class="w-full h-full object-cover" />
          </button>
        </div>
      </div>

      <!-- Right: Product Purchase Details -->
      <div class="space-y-6">
        <div>
          <div class="flex items-center justify-between text-xs text-brand-600 dark:text-brand-400 font-bold uppercase tracking-wider mb-2">
            <span>{{ product.brand }}</span>
            <div class="flex items-center gap-1 text-amber-500 font-bold">
              ★ {{ product.rating }}
              <span class="text-slate-400 font-normal">({{ product.reviewsCount }} verified reviews)</span>
            </div>
          </div>
          <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-snug">
            {{ product.name }}
          </h1>
          <p class="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
            {{ product.tagline }}
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
          <PriceDisplay :price="selectedVariant?.price ?? product.price" :original-price="product.originalPrice" :discount-percentage="product.discountPercentage" size="xl" />
          <div class="text-right">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              In Stock ({{ product.stockQuantity }} units ready to ship)
            </span>
          </div>
        </div>

        <!-- Variant Selector -->
        <div v-if="product.variants?.length" class="space-y-3">
          <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            Select Finish: <span class="text-brand-600 dark:text-brand-400 font-semibold">{{ selectedVariant?.name }}</span>
          </label>
          <div class="flex flex-wrap gap-2.5">
            <button
              v-for="variant in product.variants"
              :key="variant.id"
              type="button"
              :class="[
                'px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-2',
                selectedVariant?.id === variant.id
                  ? 'border-brand-600 bg-brand-50/60 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 ring-1 ring-brand-600'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300'
              ]"
              @click="selectedVariant = variant"
            >
              <span class="w-3.5 h-3.5 rounded-full border border-black/10 shadow-inner" :style="{ backgroundColor: variant.color }" />
              {{ variant.name }}
            </button>
          </div>
        </div>

        <!-- Quantity & Actions -->
        <div class="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div class="flex items-center gap-4">
            <div class="flex items-center border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 p-1">
              <button
                type="button"
                class="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold"
                @click="quantity = Math.max(1, quantity - 1)"
              >
                -
              </button>
              <span class="w-12 text-center text-sm font-bold">{{ quantity }}</span>
              <button
                type="button"
                class="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold"
                @click="quantity++"
              >
                +
              </button>
            </div>

            <BaseButton variant="primary" size="lg" class="flex-1" @click="handleAddToCart">
              Add to Shopping Cart
            </BaseButton>

            <button
              type="button"
              class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 hover:text-rose-600 hover:border-rose-200 transition"
              @click="wishlistStore.toggleWishlist(product)"
            >
              <svg
                class="w-5 h-5"
                :class="wishlistStore.isInWishlist(product.id) ? 'text-rose-600 fill-rose-600' : 'text-slate-400'"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          <BaseButton variant="secondary" size="lg" full-width @click="handleBuyNow">
            Instant Express Checkout
          </BaseButton>
        </div>

        <!-- Highlights list -->
        <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2.5">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Engineering Highlights</h4>
          <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
            <li v-for="(hl, idx) in product.highlights" :key="idx" class="flex items-center gap-2">
              <span class="text-brand-500 font-bold">✓</span>
              <span>{{ hl }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Specifications Table -->
    <div class="border-t border-slate-200 dark:border-slate-800 pt-10">
      <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-6 font-display">Technical Specifications</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="spec in product.specifications"
          :key="spec.key"
          class="flex justify-between p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 text-xs"
        >
          <span class="text-slate-500 font-medium">{{ spec.key }}</span>
          <span class="font-bold text-slate-900 dark:text-slate-100">{{ spec.value }}</span>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="max-w-7xl mx-auto px-4 py-20 text-center">
    <BaseSpinner size="lg" />
    <p class="text-xs text-slate-400 mt-3">Loading product details...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mockProducts } from '@/mocks/fixtures/products.json.js'
import { useCartStore } from '@/stores/cart.store.js'
import { useWishlistStore } from '@/stores/wishlist.store.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import Breadcrumbs from '@/components/navigation/Breadcrumbs.vue'
import PriceDisplay from '@/components/data-display/PriceDisplay.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseSpinner from '@/components/ui/BaseSpinner.vue'

const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()
const wishlistStore = useWishlistStore()
const notificationStore = useNotificationStore()

const product = ref(null)
const activeImage = ref('')
const selectedVariant = ref(null)
const quantity = ref(1)

onMounted(() => {
  const slug = route.params.slug
  const found = mockProducts.find(p => p.slug === slug || p.id === slug) || mockProducts[0]
  product.value = found
  activeImage.value = found.thumbnail || found.images[0]
  selectedVariant.value = found.variants?.[0] || null
})

function handleAddToCart() {
  if (!product.value) return
  cartStore.addItem(product.value, selectedVariant.value, quantity.value)
  notificationStore.success(`Added ${quantity.value}x ${product.value.name} (${selectedVariant.value?.name || 'Standard'}) to cart`)
}

function handleBuyNow() {
  handleAddToCart()
  router.push('/checkout')
}
</script>

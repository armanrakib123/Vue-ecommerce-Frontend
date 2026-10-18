<template>
  <div class="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col justify-between">
    <div class="relative aspect-square overflow-hidden bg-slate-100">
      <RouterLink :to="`/products/${product.slug}`">
        <img :src="product.thumbnail" :alt="product.name" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      </RouterLink>
    </div>
    <div class="p-5 flex-1 flex flex-col justify-between">
      <div>
        <span class="text-[10px] text-slate-400 uppercase font-bold">{{ product.brand }}</span>
        <RouterLink :to="`/products/${product.slug}`">
          <h3 class="text-sm font-bold text-slate-900 dark:text-white truncate mt-1">{{ product.name }}</h3>
        </RouterLink>
        <PriceDisplay :price="product.price" :original-price="product.originalPrice" size="sm" class="mt-2" />
      </div>
      <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
        <span class="text-xs text-amber-500 font-bold">★ {{ product.rating }}</span>
        <button class="px-3 py-1.5 rounded-xl bg-brand-600 text-white text-xs font-bold" @click="$emit('add-to-cart', product)">
          + Cart
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import PriceDisplay from '@/components/data-display/PriceDisplay.vue'
defineProps({ product: Object })
defineEmits(['add-to-cart'])
</script>

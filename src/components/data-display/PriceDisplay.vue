<template>
  <div class="inline-flex items-baseline gap-2">
    <span :class="['font-bold tracking-tight text-slate-900 dark:text-slate-100', sizeClasses[size]]">
      {{ formattedPrice }}
    </span>
    <span
      v-if="originalPrice && originalPrice > price"
      class="text-xs text-slate-400 line-through font-normal"
    >
      {{ formattedOriginal }}
    </span>
    <span
      v-if="discountPercentage"
      class="text-[10px] font-bold text-rose-600 bg-rose-50 dark:bg-rose-950/60 dark:text-rose-400 px-1.5 py-0.5 rounded-md"
    >
      -{{ discountPercentage }}%
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { formatCurrency } from '@/utils/format-currency.js'
import { usePreferencesStore } from '@/stores/preferences.store.js'

const props = defineProps({
  price: { type: [Number, String], required: true },
  originalPrice: { type: [Number, String], default: null },
  discountPercentage: { type: [Number, String], default: null },
  size: { type: String, default: 'md', validator: v => ['sm', 'md', 'lg', 'xl'].includes(v) },
})

const preferencesStore = usePreferencesStore()

const formattedPrice = computed(() => {
  return formatCurrency(props.price, preferencesStore.currency)
})

const formattedOriginal = computed(() => {
  return props.originalPrice ? formatCurrency(props.originalPrice, preferencesStore.currency) : ''
})

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-xl',
  xl: 'text-2xl sm:text-3xl',
}
</script>

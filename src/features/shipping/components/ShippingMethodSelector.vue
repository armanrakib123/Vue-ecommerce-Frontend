<template>
  <div class="space-y-3">
    <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Select Delivery Method</label>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <div
        v-for="method in shippingMethods"
        :key="method.id"
        @click="select(method.id)"
        class="cursor-pointer p-4 rounded-2xl border transition-all duration-200"
        :class="modelValue === method.id ? 'border-brand-600 bg-brand-50/50 dark:bg-brand-950/20 shadow-sm' : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'"
      >
        <div class="flex items-center justify-between mb-1">
          <span class="text-xs font-bold text-slate-900 dark:text-white">{{ method.name }}</span>
          <span class="text-xs font-bold text-brand-600 dark:text-brand-400">${{ method.price.toFixed(2) }}</span>
        </div>
        <p class="text-[11px] text-slate-500">{{ method.carrier }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useShippingOptions } from '../composables/useShippingOptions.js'
const props = defineProps({ modelValue: { type: String, default: 'standard' } })
const emit = defineEmits(['update:modelValue', 'change'])
const { shippingMethods } = useShippingOptions()
function select(id) {
  emit('update:modelValue', id)
  emit('change', id)
}
</script>

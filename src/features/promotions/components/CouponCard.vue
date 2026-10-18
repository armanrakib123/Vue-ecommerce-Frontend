<template>
  <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-dashed border-brand-300 dark:border-brand-800 flex items-center justify-between">
    <div>
      <div class="flex items-center gap-2">
        <span class="font-mono text-sm font-black text-brand-600 dark:text-brand-400">{{ coupon.code }}</span>
        <span class="text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded">{{ coupon.discount }}% OFF</span>
      </div>
      <p class="text-xs text-slate-500 mt-1">{{ coupon.description }}</p>
    </div>
    <button class="px-3 py-1.5 rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950/40 dark:text-brand-300 text-xs font-bold hover:bg-brand-100" @click="$emit('apply', coupon)">
      Apply
    </button>
  </div>
</template>
<script setup>
defineProps({ coupon: Object })
defineEmits(['apply'])
</script>

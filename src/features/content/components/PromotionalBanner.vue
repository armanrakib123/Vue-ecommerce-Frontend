<template>
  <div class="p-6 rounded-3xl bg-gradient-to-r from-brand-600 to-indigo-700 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
    <div>
      <h4 class="text-lg font-bold font-display">{{ title }}</h4>
      <p class="text-xs text-white/80 mt-0.5">{{ subtitle }}</p>
    </div>
    <RouterLink :to="to" class="px-4 py-2 rounded-xl bg-white text-brand-700 font-bold text-xs hover:bg-slate-100 transition whitespace-nowrap shadow-sm">
      {{ cta }}
    </RouterLink>
  </div>
</template>
<script setup>
defineProps({
  title: { type: String, default: 'Limited VIP Hardware Release' },
  subtitle: { type: String, default: 'Reserve yours with members-only early access' },
  cta: { type: String, default: 'Claim Access' },
  to: { type: String, default: '/products' }
})
</script>

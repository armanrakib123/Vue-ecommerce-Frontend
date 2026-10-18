<template>
  <div class="rounded-3xl p-6 sm:p-8 text-white bg-gradient-to-r relative overflow-hidden shadow-lg" :class="gradientClass">
    <div class="relative z-10 max-w-xl">
      <span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md mb-3 inline-block">
        {{ badge }}
      </span>
      <h3 class="text-2xl font-black font-display mb-2">{{ title }}</h3>
      <p class="text-xs text-white/80 mb-4">{{ subtitle }}</p>
      <div v-if="code" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono">
        <span>Use Code:</span>
        <strong class="font-bold text-amber-300">{{ code }}</strong>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: { type: String, default: 'Special Offer' },
  subtitle: { type: String, default: 'Save on your next luxury purchase' },
  badge: { type: String, default: 'Limited Offer' },
  code: { type: String, default: 'FALL20' },
  gradientClass: { type: String, default: 'from-brand-600 to-purple-700' }
})
</script>

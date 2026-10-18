<template>
  <div class="relative rounded-3xl overflow-hidden bg-slate-950 text-white p-8 sm:p-14">
    <div class="relative z-10 max-w-2xl space-y-4">
      <span class="px-3 py-1 rounded-full text-xs font-bold bg-brand-500/20 text-brand-300 border border-brand-500/30 uppercase tracking-widest">
        {{ badge }}
      </span>
      <h2 class="text-3xl sm:text-5xl font-black font-display tracking-tight">{{ title }}</h2>
      <p class="text-sm sm:text-base text-slate-300 leading-relaxed">{{ subtitle }}</p>
      <div class="pt-2">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: { type: String, default: 'Crafted with Precision' },
  subtitle: { type: String, default: 'Next-generation industrial design meets acoustic mastery.' },
  badge: { type: String, default: 'Innovation 2026' }
})
</script>

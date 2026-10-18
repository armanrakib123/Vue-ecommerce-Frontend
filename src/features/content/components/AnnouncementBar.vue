<template>
  <div class="bg-slate-900 text-slate-300 py-2 px-4 text-center text-xs font-semibold flex items-center justify-center gap-2 border-b border-slate-800">
    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
    <slot>{{ text || 'Complimentary Worldwide Air Express on orders over $150' }}</slot>
  </div>
</template>
<script setup>
defineProps({ text: String })
</script>

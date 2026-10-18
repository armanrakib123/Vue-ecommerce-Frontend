<template>
  <div class="p-6 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
    <span class="text-[10px] font-bold uppercase tracking-wider text-amber-400">{{ campaign.badge }}</span>
    <h4 class="text-lg font-black font-display mt-1">{{ campaign.title }}</h4>
    <p class="text-xs text-slate-400 mt-1">{{ campaign.subtitle }}</p>
  </div>
</template>
<script setup>
defineProps({ campaign: Object })
</script>

<template>
  <div class="flex items-center gap-1 text-amber-500 text-xs font-bold">
    <span>★</span>
    <span>{{ rating }}</span>
    <span class="text-slate-400 font-normal">({{ count }})</span>
  </div>
</template>
<script setup>
defineProps({ rating: Number, count: Number })
</script>

<template>
  <div class="flex items-center justify-between pb-4 border-b">
    <span class="text-xs text-slate-400">{{ total }} Products</span>
    <slot />
  </div>
</template>
<script setup>
defineProps({ total: Number })
</script>

<template>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400">
    <slot>{{ text || 'SALE' }}</slot>
  </span>
</template>
<script setup>
defineProps({ text: String })
</script>

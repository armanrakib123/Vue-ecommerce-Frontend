<template>
  <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border text-xs space-y-2">
    <h3 class="font-bold">Summary</h3>
    <div class="flex justify-between"><span>Subtotal:</span><span>${{ subtotal }}</span></div>
  </div>
</template>
<script setup>
defineProps({ subtotal: Number })
</script>

<template>
  <div class="text-xs font-bold">Total: ${{ total }}</div>
</template>
<script setup>
defineProps({ total: Number })
</script>

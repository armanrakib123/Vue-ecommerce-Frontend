<template>
  <div class="p-2 border rounded text-xs flex justify-between">
    <span>{{ item.name }}</span>
    <span>${{ item.price }}</span>
  </div>
</template>
<script setup>
defineProps({ item: Object })
</script>

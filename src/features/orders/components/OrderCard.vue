<template>
  <div class="p-4 border rounded-2xl text-xs space-y-2">
    <div class="flex justify-between font-bold">
      <span>{{ order.orderNumber }}</span>
      <span>${{ order.total }}</span>
    </div>
  </div>
</template>
<script setup>
defineProps({ order: Object })
</script>

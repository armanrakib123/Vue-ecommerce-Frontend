<template>
  <div class="space-y-3">
    <OrderCard v-for="o in orders" :key="o.id" :order="o" />
  </div>
</template>
<script setup>
import OrderCard from './OrderCard.vue'
defineProps({ orders: Array })
</script>

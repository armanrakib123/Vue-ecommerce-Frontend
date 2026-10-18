<template>
  <div class="space-y-2">
    <CartItem v-for="i in items" :key="i.id" :item="i" />
  </div>
</template>
<script setup>
import CartItem from './CartItem.vue'
defineProps({ items: Array })
</script>

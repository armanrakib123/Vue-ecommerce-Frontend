<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-4">Cart Page</h1>
    <CartItemList :items="cartStore.items" />
  </div>
</template>
<script setup>
import { useCartStore } from '@/stores/cart.store.js'
import CartItemList from '../components/CartItemList.vue'
const cartStore = useCartStore()
</script>

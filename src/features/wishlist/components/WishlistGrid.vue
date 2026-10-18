<template>
  <div class="grid grid-cols-2 gap-3">
    <WishlistItem v-for="i in items" :key="i.id" :item="i" />
  </div>
</template>
<script setup>
import WishlistItem from './WishlistItem.vue'
defineProps({ items: Array })
</script>

<template>
  <PriceDisplay :price="price" :original-price="originalPrice" />
</template>
<script setup>
import PriceDisplay from '@/components/data-display/PriceDisplay.vue'
defineProps({ price: Number, originalPrice: Number })
</script>

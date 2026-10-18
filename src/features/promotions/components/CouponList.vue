<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <CouponCard v-for="c in coupons" :key="c.code" :coupon="c" @apply="$emit('apply', $event)" />
  </div>
</template>
<script setup>
import CouponCard from './CouponCard.vue'
defineProps({ coupons: Array })
defineEmits(['apply'])
</script>

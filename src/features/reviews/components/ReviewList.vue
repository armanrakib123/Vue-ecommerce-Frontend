<template>
  <div class="space-y-4">
    <ReviewCard v-for="rev in reviews" :key="rev.id" :review="rev" />
  </div>
</template>
<script setup>
import ReviewCard from './ReviewCard.vue'
defineProps({ reviews: { type: Array, default: () => [] } })
</script>

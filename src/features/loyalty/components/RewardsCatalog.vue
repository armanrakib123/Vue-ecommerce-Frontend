<template>
  <div class="space-y-4">
    <h3 class="text-base font-bold text-slate-900 dark:text-white font-display">Exclusive Perks & Vouchers</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <RewardCard v-for="r in rewards" :key="r.id" :reward="r" :can-redeem="userPoints >= r.cost" @redeem="$emit('redeem', $event)" />
    </div>
  </div>
</template>
<script setup>
import RewardCard from './RewardCard.vue'
defineProps({ rewards: Array, userPoints: { type: Number, default: 2450 } })
defineEmits(['redeem'])
</script>

<template>
  <div class="space-y-3">
    <AddressCard v-for="a in addresses" :key="a.id" :address="a" />
  </div>
</template>
<script setup>
import AddressCard from './AddressCard.vue'
defineProps({ addresses: Array })
</script>

<template>
  <div class="space-y-6">
    <h2 class="text-xl font-bold">Address Book</h2>
    <AddressList :addresses="addresses" />
  </div>
</template>
<script setup>
import { useAddresses } from '../composables/useAddresses.js'
import AddressList from '../components/AddressList.vue'
const { addresses } = useAddresses()
</script>

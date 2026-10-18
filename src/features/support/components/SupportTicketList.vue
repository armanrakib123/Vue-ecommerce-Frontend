<template>
  <div class="space-y-3">
    <SupportTicketCard v-for="t in tickets" :key="t.id" :ticket="t" />
  </div>
</template>
<script setup>
import SupportTicketCard from './SupportTicketCard.vue'
defineProps({ tickets: Array })
</script>

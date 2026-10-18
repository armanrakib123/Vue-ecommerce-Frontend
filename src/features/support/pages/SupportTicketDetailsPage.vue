<template>
  <div class="max-w-4xl mx-auto py-8 px-4 space-y-6">
    <RouterLink to="/support/tickets" class="text-xs font-bold text-brand-600 hover:underline">← Back to Ticket Queue</RouterLink>
    <TicketConversation v-if="ticket" :ticket="ticket" @reply="handleReply" />
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import TicketConversation from '../components/TicketConversation.vue'
import { useTicketConversation } from '../composables/useTicketConversation.js'

const route = useRoute()
const { ticket, sendReply } = useTicketConversation(route.params.id)

function handleReply(text) {
  sendReply(text, 'customer')
}
</script>

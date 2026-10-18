<template>
  <div class="max-w-6xl mx-auto py-8 px-4 space-y-8">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Support Desk Tickets</h1>
        <p class="text-xs text-slate-500">Manage inquiries, conversations, and resolution SLA</p>
      </div>
      <BaseButton size="sm" variant="primary" @click="showModal = true">+ New Inquiry</BaseButton>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-1 space-y-3">
        <SupportTicketList :tickets="tickets" />
      </div>
      <div class="lg:col-span-2">
        <TicketConversation v-if="activeTicket" :ticket="activeTicket" @reply="handleReply" />
      </div>
    </div>
    <BaseModal :is-open="showModal" title="Open Support Ticket" @close="showModal = false">
      <SupportTicketForm @create="handleCreateTicket" />
    </BaseModal>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseModal from '@/components/ui/BaseModal.vue'
import SupportTicketList from '../components/SupportTicketList.vue'
import TicketConversation from '../components/TicketConversation.vue'
import SupportTicketForm from '../components/SupportTicketForm.vue'
import { useSupportTickets } from '../composables/useSupportTickets.js'
import { useNotificationStore } from '@/stores/notification.store.js'

const { tickets, addTicket } = useSupportTickets()
const notificationStore = useNotificationStore()
const showModal = ref(false)
const activeTicket = computed(() => tickets.value[0])

function handleCreateTicket(data) {
  addTicket(data)
  showModal.value = false
  notificationStore.success('Support ticket created successfully!')
}

function handleReply(text) {
  if (activeTicket.value) {
    activeTicket.value.messages.push({
      id: `msg_${Date.now()}`,
      sender: 'customer',
      senderName: 'Sarah Connor',
      timestamp: new Date().toISOString(),
      text
    })
  }
}
</script>

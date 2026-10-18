<template>
  <div class="flex flex-col h-[550px] bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden">
    <div class="p-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
      <div>
        <div class="flex items-center gap-2">
          <h3 class="text-sm font-bold text-slate-900 dark:text-white">{{ ticket.subject }}</h3>
          <TicketStatus :status="ticket.status" />
        </div>
        <p class="text-[11px] text-slate-500">{{ ticket.customer.name }} ({{ ticket.customer.email }})</p>
      </div>
      <span class="text-xs font-mono text-slate-400">{{ ticket.ticketNumber }}</span>
    </div>

    <div class="flex-1 overflow-y-auto p-4 space-y-4">
      <ChatMessage v-for="msg in ticket.messages" :key="msg.id" :message="msg" />
    </div>

    <ChatComposer @send="$emit('reply', $event)" />
  </div>
</template>
<script setup>
import TicketStatus from './TicketStatus.vue'
import ChatMessage from './ChatMessage.vue'
import ChatComposer from './ChatComposer.vue'
defineProps({ ticket: Object })
defineEmits(['reply'])
</script>

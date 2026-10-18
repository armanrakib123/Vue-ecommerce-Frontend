<template>
  <RouterLink :to="`/support/tickets/${ticket.id}`" class="block p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:shadow-md transition">
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-slate-500">{{ ticket.ticketNumber }}</span>
        <TicketStatus :status="ticket.status" />
      </div>
      <span class="text-[10px] text-slate-400">{{ ticket.customer.name }}</span>
    </div>
    <h4 class="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">{{ ticket.subject }}</h4>
    <p class="text-[11px] text-slate-500 mt-1 line-clamp-1">{{ ticket.messages[ticket.messages.length - 1]?.text }}</p>
  </RouterLink>
</template>
<script setup>
import TicketStatus from './TicketStatus.vue'
defineProps({ ticket: Object })
</script>

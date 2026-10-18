<template>
  <div v-if="ticket" class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <RouterLink to="/support/tickets" class="text-xs text-sky-600 hover:underline">← Back to Queue</RouterLink>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display mt-1">
          Ticket {{ ticket.ticketNumber }}
        </h1>
        <p class="text-xs text-slate-500">{{ ticket.subject }}</p>
      </div>

      <div class="flex items-center gap-3">
        <select
          v-model="ticket.status"
          class="text-xs px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 font-bold outline-none"
        >
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="resolved">Resolved</option>
          <option value="closed">Closed</option>
        </select>
        <StatusBadge :status="ticket.status" />
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Left: Thread History and Composer -->
      <div class="lg:col-span-2 space-y-4">
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
          <h3 class="text-sm font-bold text-slate-900 dark:text-white">Conversation History</h3>

          <div class="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            <div
              v-for="msg in ticket.messages"
              :key="msg.id"
              :class="[
                'p-4 rounded-2xl text-xs space-y-1',
                msg.sender === 'agent'
                  ? 'bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-900/40 ml-6'
                  : 'bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 mr-6'
              ]"
            >
              <div class="flex items-center justify-between font-bold">
                <span :class="msg.sender === 'agent' ? 'text-sky-600 dark:text-sky-400' : 'text-slate-800 dark:text-slate-200'">
                  {{ msg.senderName }} {{ msg.sender === 'agent' ? '(Support Concierge)' : '(Customer)' }}
                </span>
                <span class="text-[10px] text-slate-400 font-normal">{{ formatDate(msg.timestamp) }}</span>
              </div>
              <p class="text-slate-700 dark:text-slate-300 leading-relaxed">{{ msg.text }}</p>
            </div>
          </div>

          <!-- Composer -->
          <div class="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Agent Response
            </label>
            <textarea
              v-model="replyText"
              rows="3"
              class="w-full text-xs p-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-sky-500 outline-none"
              placeholder="Type your response to the customer..."
            ></textarea>

            <div class="flex justify-between items-center">
              <div class="flex gap-2">
                <button
                  type="button"
                  class="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 font-medium"
                  @click="insertMacro('address')"
                >
                  + Macro: Address Confirmed
                </button>
                <button
                  type="button"
                  class="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 font-medium"
                  @click="insertMacro('warranty')"
                >
                  + Macro: 2-Year Warranty
                </button>
              </div>

              <BaseButton variant="primary" size="sm" @click="sendReply">
                Send Reply & Update
              </BaseButton>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Customer Profile Context -->
      <div class="lg:col-span-1 space-y-4">
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
          <h3 class="text-sm font-bold text-slate-900 dark:text-white">Customer Profile</h3>
          <div class="space-y-2 text-xs">
            <p><span class="text-slate-400">Name:</span> <span class="font-bold text-slate-800 dark:text-slate-200">{{ ticket.customer.name }}</span></p>
            <p><span class="text-slate-400">Email:</span> <span class="font-bold text-slate-800 dark:text-slate-200">{{ ticket.customer.email }}</span></p>
            <p><span class="text-slate-400">Phone:</span> {{ ticket.customer.phone || '+1 (555) 234-5678' }}</p>
            <p><span class="text-slate-400">Tier:</span> <span class="font-bold text-brand-600">VIP Platinum Member</span></p>
            <p><span class="text-slate-400">Lifetime Orders:</span> 12 ($3,420.00)</p>
          </div>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
          <h3 class="text-sm font-bold text-slate-900 dark:text-white">Quick Order Actions</h3>
          <RouterLink
            to="/account/orders/ord_984210"
            class="block w-full py-2 px-3 text-center text-xs font-bold rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 transition"
          >
            Inspect Order #NX-2026-984210
          </RouterLink>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="py-20 text-center">
    <BaseSpinner size="lg" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { mockTickets } from '@/mocks/fixtures/tickets.json.js'
import { formatDate } from '@/utils/format-date.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import StatusBadge from '@/components/data-display/StatusBadge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseSpinner from '@/components/ui/BaseSpinner.vue'

const route = useRoute()
const notificationStore = useNotificationStore()
const ticket = ref(null)
const replyText = ref('')

onMounted(() => {
  const found = mockTickets.find(t => t.id === route.params.id) || mockTickets[0]
  ticket.value = found
})

function insertMacro(type) {
  if (type === 'address') {
    replyText.value = 'We have successfully contacted FedEx dispatch and updated your delivery apartment notes to Apt 4A. A revised delivery tracking confirmation has been dispatched.'
  } else if (type === 'warranty') {
    replyText.value = 'All Nexora Care premium hardware warranties include zero-deductible accidental replacement within 24 months of order authorization.'
  }
}

function sendReply() {
  if (!replyText.value.trim() || !ticket.value) return
  ticket.value.messages.push({
    id: `msg_${Date.now()}`,
    sender: 'agent',
    senderName: 'Elena Rostova',
    timestamp: new Date().toISOString(),
    text: replyText.value.trim()
  })
  ticket.value.status = 'resolved'
  replyText.value = ''
  notificationStore.success('Agent reply dispatched and ticket state updated to RESOLVED!')
}
</script>

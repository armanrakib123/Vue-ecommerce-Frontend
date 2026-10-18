<template>
  <form @submit.prevent="handleSubmit" class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
    <h3 class="text-base font-bold text-slate-900 dark:text-white font-display">Open Support Ticket</h3>
    <BaseInput v-model="form.subject" label="Subject / Brief Summary" placeholder="e.g. Inquiring about shipment delay" :error="errors.subject?.[0]" />
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Issue Category</label>
        <select v-model="form.category" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs">
          <option value="shipping">Logistics & Shipping</option>
          <option value="product">Hardware Technical Inquiry</option>
          <option value="billing">Billing & Refund</option>
          <option value="account">Account Access</option>
        </select>
      </div>
      <BaseInput v-model="form.orderNumber" label="Order ID (optional)" placeholder="e.g. NX-2026-8942" />
    </div>
    <div>
      <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Description</label>
      <textarea
        v-model="form.description"
        rows="4"
        class="w-full px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs focus:ring-2 focus:ring-brand-500"
        placeholder="Provide serial numbers, symptoms, or tracking waybills..."
      ></textarea>
      <p v-if="errors.description" class="text-[11px] text-rose-500 mt-1">{{ errors.description[0] }}</p>
    </div>
    <BaseButton type="submit" variant="primary" size="sm">Create Ticket</BaseButton>
  </form>
</template>
<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { validateSupportTicket } from '../schemas/support-ticket.schema.js'

const emit = defineEmits(['create'])
const form = ref({ subject: '', category: 'shipping', orderNumber: '', priority: 'medium', description: '' })
const errors = ref({})

function handleSubmit() {
  const res = validateSupportTicket(form.value)
  if (!res.success) {
    errors.value = res.error.flatten().fieldErrors
    return
  }
  errors.value = {}
  emit('create', form.value)
  form.value = { subject: '', category: 'shipping', orderNumber: '', priority: 'medium', description: '' }
}
</script>

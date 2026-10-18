<template>
  <form @submit.prevent="handleSubmit" class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-5">
    <h3 class="text-base font-bold text-slate-900 dark:text-white font-display">Start a No-Hassle Return</h3>
    <BaseInput v-model="form.orderNumber" label="Order ID" placeholder="e.g. NX-2026-8942" required />
    <ReturnReasonSelector v-model="form.reason" />
    <ReturnItemSelector :items="mockItems" v-model:selected-ids="form.itemIds" />
    <RefundSummary :amount="249.00" />
    <BaseButton type="submit" variant="primary" size="sm" :loading="isSubmitting">Submit RMA Request</BaseButton>
  </form>
</template>
<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import ReturnReasonSelector from './ReturnReasonSelector.vue'
import ReturnItemSelector from './ReturnItemSelector.vue'
import RefundSummary from './RefundSummary.vue'
import { useReturnRequest } from '../composables/useReturnRequest.js'

const emit = defineEmits(['submitted'])
const form = ref({ orderNumber: 'NX-2026-8942', reason: 'changed_mind', itemIds: ['it_1'] })
const mockItems = ref([
  { id: 'it_1', name: 'AuraStudio Pro Over-Ear Wireless', price: 249.00, quantity: 1 }
])

const { isSubmitting, submitReturn } = useReturnRequest((data) => {
  emit('submitted', data)
})

function handleSubmit() {
  submitReturn(form.value)
}
</script>

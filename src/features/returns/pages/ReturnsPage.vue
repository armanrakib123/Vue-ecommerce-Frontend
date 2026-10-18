<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Returns & Refunds</h1>
        <p class="text-xs text-slate-500">Manage 30-day returns and track refund settlements</p>
      </div>
      <BaseButton size="sm" variant="primary" @click="showModal = true">+ Request RMA</BaseButton>
    </div>

    <div class="space-y-4">
      <div v-for="ret in returnList" :key="ret.id" class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="text-xs font-mono font-bold text-brand-600">{{ ret.rmaNumber }}</span>
            <ReturnStatus :status="ret.status" />
          </div>
          <span class="text-xs font-bold text-emerald-600 font-mono">+${{ ret.refundAmount.toFixed(2) }} Refunded</span>
        </div>
        <h4 class="text-sm font-bold text-slate-900 dark:text-white">{{ ret.item }}</h4>
        <p class="text-xs text-slate-500">{{ ret.reason }}</p>
        <ReturnTimeline />
      </div>
    </div>

    <BaseModal :is-open="showModal" title="New Return Request" @close="showModal = false">
      <ReturnRequestForm @submitted="handleReturnSubmit" />
    </BaseModal>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseModal from '@/components/ui/BaseModal.vue'
import ReturnStatus from '../components/ReturnStatus.vue'
import ReturnTimeline from '../components/ReturnTimeline.vue'
import ReturnRequestForm from '../components/ReturnRequestForm.vue'
import { useReturns } from '../composables/useReturns.js'
import { useNotificationStore } from '@/stores/notification.store.js'

const { returnList } = useReturns()
const notificationStore = useNotificationStore()
const showModal = ref(false)

function handleReturnSubmit(data) {
  showModal.value = false
  notificationStore.success('Return authorization request created!')
}
</script>

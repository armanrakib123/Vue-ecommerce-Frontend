<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h2 class="text-xl font-black text-slate-900 dark:text-white font-display">Returns & Refunds</h2>
        <p class="text-xs text-slate-500">Nexora 30-day hassle-free return and exchange requests</p>
      </div>
      <BaseButton variant="primary" size="sm" @click="showReturnModal = true">
        Request New Return
      </BaseButton>
    </div>

    <div class="space-y-4">
      <div
        v-for="ret in returns"
        :key="ret.id"
        class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3"
      >
        <div class="flex items-center justify-between">
          <div>
            <span class="text-xs font-mono font-bold text-slate-900 dark:text-white">{{ ret.rmaNumber }}</span>
            <span class="text-xs text-slate-400 ml-2">• Ref: {{ ret.orderNumber }}</span>
          </div>
          <StatusBadge :status="ret.status" />
        </div>

        <div class="text-xs space-y-1">
          <p><span class="text-slate-400">Item:</span> <span class="font-bold text-slate-800 dark:text-slate-200">{{ ret.itemName }}</span></p>
          <p><span class="text-slate-400">Reason:</span> {{ ret.reason }}</p>
          <p><span class="text-slate-400">Refund Method:</span> {{ ret.refundMethod }} ({{ formatCurrency(ret.amount) }})</p>
        </div>
      </div>
    </div>

    <BaseModal :is-open="showReturnModal" title="Initiate Return" @close="showReturnModal = false">
      <div class="space-y-3">
        <BaseInput v-model="newReturn.orderNumber" label="Order ID" placeholder="NX-2026-984210" required />
        <BaseInput v-model="newReturn.itemName" label="Product Name" placeholder="Lumina Sound Pro ANC" required />
        <BaseSelect
          v-model="newReturn.reason"
          label="Reason for Return"
          :options="['Item arrived damaged', 'Changed mind / sizing', 'Received wrong model', 'Performance not as expected']"
        />
      </div>
      <template #footer>
        <BaseButton variant="secondary" @click="showReturnModal = false">Cancel</BaseButton>
        <BaseButton variant="primary" @click="submitReturn">Generate RMA Label</BaseButton>
      </template>
    </BaseModal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNotificationStore } from '@/stores/notification.store.js'
import { formatCurrency } from '@/utils/format-currency.js'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseModal from '@/components/ui/BaseModal.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import StatusBadge from '@/components/data-display/StatusBadge.vue'

const notificationStore = useNotificationStore()
const showReturnModal = ref(false)

const returns = ref([
  {
    id: 'rma_1',
    rmaNumber: 'RMA-2026-091',
    orderNumber: 'NX-2026-984210',
    itemName: 'AeroFlex 28L Weatherproof Commuter Backpack',
    reason: 'Fit preference (requested 32L exchange)',
    amount: 220.00,
    refundMethod: 'Original Payment Method',
    status: 'processing'
  }
])

const newReturn = ref({
  orderNumber: 'NX-2026-984211',
  itemName: 'Chronos Vanguard Titanium Smartwatch',
  reason: 'Changed mind / sizing'
})

function submitReturn() {
  returns.value.push({
    id: `rma_${Date.now()}`,
    rmaNumber: `RMA-2026-${Math.floor(100 + Math.random() * 900)}`,
    orderNumber: newReturn.value.orderNumber,
    itemName: newReturn.value.itemName,
    reason: newReturn.value.reason,
    amount: 499.00,
    refundMethod: 'Original Payment Method',
    status: 'pending'
  })
  showReturnModal.value = false
  notificationStore.success('Return request registered. Prepaid return label generated!')
}
</script>

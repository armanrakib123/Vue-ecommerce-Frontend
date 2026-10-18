<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Warehouse & Inventory Management</h1>
        <p class="text-xs text-slate-500">Live multi-warehouse allocation, replenishment, and cycle counts</p>
      </div>
    </div>
    <LowStockAlert :items="lowStockItems" />
    <InventoryTable :inventory="inventory" @adjust="openAdjustModal" />
    <StockMovementTable :movements="movements" />

    <BaseModal :is-open="showModal" title="Stock Adjustment" @close="showModal = false">
      <StockAdjustmentForm :initial-sku="selectedSku" @adjust="handleAdjustCommit" />
    </BaseModal>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import BaseModal from '@/components/ui/BaseModal.vue'
import LowStockAlert from '../components/LowStockAlert.vue'
import InventoryTable from '../components/InventoryTable.vue'
import StockMovementTable from '../components/StockMovementTable.vue'
import StockAdjustmentForm from '../components/StockAdjustmentForm.vue'
import { useInventory } from '../composables/useInventory.js'
import { useStockMovements } from '../composables/useStockMovements.js'
import { useLowStockAlerts } from '../composables/useLowStockAlerts.js'
import { useNotificationStore } from '@/stores/notification.store.js'

const { inventory, adjustStock } = useInventory()
const { movements } = useStockMovements()
const { lowStockItems } = useLowStockAlerts()
const notificationStore = useNotificationStore()

const showModal = ref(false)
const selectedSku = ref('')

function openAdjustModal(item) {
  selectedSku.value = item.sku
  showModal.value = true
}

function handleAdjustCommit(data) {
  adjustStock(data.sku, data.delta)
  movements.value.unshift({
    id: `sm_${Date.now()}`,
    sku: data.sku,
    delta: data.delta,
    type: data.reason,
    warehouse: data.warehouse,
    user: 'Operations Lead',
    time: 'Just now'
  })
  showModal.value = false
  notificationStore.success(`Updated stock for ${data.sku}`)
}
</script>

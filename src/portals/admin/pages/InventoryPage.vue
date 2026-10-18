<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Multi-Warehouse Inventory Control</h1>
        <p class="text-xs text-slate-500">Stock on hand, allocated quantities, bin locations, and safety stock rules</p>
      </div>
      <BaseButton variant="primary" size="sm" @click="showModal = true">
        + Stock Transfer / Adjust
      </BaseButton>
    </div>

    <DataTable :columns="columns" :rows="items">
      <template #product="{ row }">
        <div>
          <p class="text-xs font-bold text-slate-900 dark:text-white">{{ row.productName }}</p>
          <p class="text-[10px] text-slate-400 font-mono">{{ row.sku }} • {{ row.binLocation }}</p>
        </div>
      </template>

      <template #warehouse="{ row }">
        <span class="text-xs text-slate-600 dark:text-slate-300">{{ row.warehouse }}</span>
      </template>

      <template #stockOnHand="{ row }">
        <span class="text-xs font-bold">{{ row.stockOnHand }}</span>
      </template>

      <template #available="{ row }">
        <span :class="['text-xs font-bold px-2 py-0.5 rounded-full', row.available < row.reorderPoint ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800']">
          {{ row.available }} avail
        </span>
      </template>

      <template #status="{ row }">
        <StatusBadge :status="row.status" />
      </template>

      <template #actions="{ row }">
        <button class="text-xs font-bold text-brand-600 hover:underline" @click="quickAdd(row)">
          + Quick Replenish
        </button>
      </template>
    </DataTable>

    <BaseModal :is-open="showModal" title="Inventory Stock Adjustment" @close="showModal = false">
      <div class="space-y-3">
        <BaseSelect
          v-model="adjust.sku"
          label="Target SKU"
          :options="items.map(i => ({ label: `${i.sku} - ${i.productName}`, value: i.sku }))"
        />
        <BaseInput v-model="adjust.delta" label="Quantity delta (use negative to decrease)" type="number" placeholder="25" required />
        <BaseInput v-model="adjust.reason" label="Adjustment Reason" placeholder="Cycle count variance / batch arrival" required />
      </div>
      <template #footer>
        <BaseButton variant="secondary" @click="showModal = false">Cancel</BaseButton>
        <BaseButton variant="primary" @click="applyAdjustment">Commit Adjustment</BaseButton>
      </template>
    </BaseModal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { mockInventory } from '@/mocks/fixtures/inventory.json.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import DataTable from '@/components/data-display/DataTable.vue'
import StatusBadge from '@/components/data-display/StatusBadge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseModal from '@/components/ui/BaseModal.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'

const notificationStore = useNotificationStore()
const items = ref([...mockInventory])
const showModal = ref(false)

const columns = [
  { key: 'product', label: 'Item & Bin Location' },
  { key: 'warehouse', label: 'Fulfillment Hub' },
  { key: 'stockOnHand', label: 'On Hand' },
  { key: 'available', label: 'Available' },
  { key: 'status', label: 'Stock State' },
  { key: 'actions', label: 'Manage', align: 'right' }
]

const adjust = ref({
  sku: items.value[0]?.sku || '',
  delta: 20,
  reason: 'Manufacturer restock batch'
})

function quickAdd(row) {
  row.stockOnHand += 10
  row.available += 10
  notificationStore.success(`Replenished +10 units for ${row.sku}`)
}

function applyAdjustment() {
  const item = items.value.find(i => i.sku === adjust.value.sku)
  if (item) {
    const d = Number(adjust.value.delta) || 0
    item.stockOnHand += d
    item.available += d
    notificationStore.success(`Committed inventory adjustment of ${d > 0 ? '+' + d : d} units on ${item.sku}`)
  }
  showModal.value = false
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <BaseInput v-model="form.sku" label="SKU" disabled />
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Delta Units (+ / -)</label>
        <input v-model.number="form.delta" type="number" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-mono" />
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Facility</label>
        <select v-model="form.warehouse" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs">
          <option value="WH-SF-01">WH-SF-01</option>
          <option value="WH-OAK-02">WH-OAK-02</option>
        </select>
      </div>
    </div>
    <BaseInput v-model="form.reason" label="Audit Reason" placeholder="Cycle count variance, PO inbound..." required />
    <BaseButton type="submit" variant="primary" size="sm">Commit Adjustment</BaseButton>
  </form>
</template>
<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
const props = defineProps({ initialSku: String })
const emit = defineEmits(['adjust'])
const form = ref({ sku: props.initialSku || 'AUR-HP-001', delta: 10, warehouse: 'WH-SF-01', reason: '' })
function handleSubmit() {
  emit('adjust', form.value)
}
</script>

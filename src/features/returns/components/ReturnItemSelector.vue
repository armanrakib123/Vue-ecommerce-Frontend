<template>
  <div class="space-y-2">
    <label class="block text-xs font-bold text-slate-700 dark:text-slate-300">Select Items to Return</label>
    <div
      v-for="item in items"
      :key="item.id"
      class="p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition"
      :class="selectedIds.includes(item.id) ? 'border-brand-500 bg-brand-50/30 dark:bg-brand-950/20' : 'border-slate-200 dark:border-slate-800'"
      @click="toggle(item.id)"
    >
      <div class="flex items-center gap-3">
        <input type="checkbox" :checked="selectedIds.includes(item.id)" class="rounded text-brand-600" />
        <div>
          <h4 class="text-xs font-bold text-slate-900 dark:text-white">{{ item.name }}</h4>
          <p class="text-[11px] text-slate-500">${{ item.price.toFixed(2) }} • Qty: {{ item.quantity }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({ items: { type: Array, default: () => [] }, selectedIds: { type: Array, default: () => [] } })
const emit = defineEmits(['update:selectedIds'])
function toggle(id) {
  const current = [...props.selectedIds]
  const idx = current.indexOf(id)
  if (idx > -1) current.splice(idx, 1)
  else current.push(id)
  emit('update:selectedIds', current)
}
</script>

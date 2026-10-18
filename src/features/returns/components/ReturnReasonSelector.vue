<template>
  <div>
    <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Reason for Return</label>
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs focus:ring-2 focus:ring-brand-500"
    >
      <option value="">Select a reason...</option>
      <option value="defective">Hardware Defect / Not Working</option>
      <option value="wrong_item">Received Incorrect Item</option>
      <option value="changed_mind">No Longer Needed / Changed Mind</option>
      <option value="aesthetic">Colorway / Sizing Not As Expected</option>
    </select>
  </div>
</template>
<script setup>
defineProps({ modelValue: String })
defineEmits(['update:modelValue'])
</script>

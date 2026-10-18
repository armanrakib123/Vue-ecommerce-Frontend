<template>
  <select :value="modelValue" @change="$emit('update:modelValue', $event.target.value)" class="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs">
    <option value="all">All Global Hubs</option>
    <option value="WH-SF-01">San Francisco Hub 1</option>
    <option value="WH-OAK-02">Oakland Air Terminal</option>
    <option value="WH-AMS-01">Amsterdam Euro DC</option>
  </select>
</template>
<script setup>
defineProps({ modelValue: String })
defineEmits(['update:modelValue'])
</script>

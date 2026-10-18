<template>
  <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs space-y-1">
    <p class="font-bold text-slate-900 dark:text-white">{{ address.name || 'Recipient' }}</p>
    <p class="text-slate-600 dark:text-slate-400">{{ address.street }}</p>
    <p class="text-slate-600 dark:text-slate-400">{{ address.city }}, {{ address.state }} {{ address.zip }}</p>
    <p class="text-slate-500 text-[11px] pt-1">{{ address.phone }}</p>
  </div>
</template>
<script setup>
defineProps({ address: { type: Object, default: () => ({ street: '742 Evergreen Terrace', city: 'Springfield', state: 'OR', zip: '97477' }) } })
</script>

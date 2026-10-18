<template>
  <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs space-y-1">
    <p class="font-bold text-slate-900 dark:text-white">{{ address.fullName }}</p>
    <p class="text-slate-500">{{ address.street }}</p>
    <p class="text-slate-500">{{ address.city }}, {{ address.state }} {{ address.postalCode }}</p>
  </div>
</template>
<script setup>
defineProps({ address: Object })
</script>

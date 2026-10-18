<template>
  <div class="max-w-4xl mx-auto px-4 py-16 space-y-6">
    <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">{{ title }}</h1>
    <div class="prose dark:prose-invert text-xs leading-relaxed text-slate-600 dark:text-slate-400">
      <p>Nexora terms of enterprise service, privacy charters, and hardware telemetry disclosures.</p>
    </div>
  </div>
</template>
<script setup>
defineProps({ title: { type: String, default: 'Legal & Compliance' } })
</script>

<template>
  <div class="border-l-2 border-slate-200 dark:border-slate-800 ml-3 space-y-4 py-2">
    <div v-for="(step, idx) in steps" :key="idx" class="relative pl-6">
      <span class="absolute -left-1.5 top-1 w-3 h-3 rounded-full" :class="step.done ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-700'"></span>
      <h5 class="text-xs font-bold text-slate-900 dark:text-white">{{ step.title }}</h5>
      <p class="text-[11px] text-slate-500">{{ step.desc }}</p>
    </div>
  </div>
</template>
<script setup>
defineProps({
  steps: {
    type: Array,
    default: () => [
      { title: 'Return Authorization Issued', desc: 'Prepaid return label generated', done: true },
      { title: 'In-Transit to Warehouse', desc: 'Scanned at transit facility', done: true },
      { title: 'Technical Inspection', desc: 'Hardware diagnostics passed', done: true },
      { title: 'Refund Credited', desc: 'Returned to original payment source', done: true }
    ]
  }
})
</script>

<template>
  <div class="space-y-1">
    <div class="flex gap-1 h-1.5 w-full">
      <div v-for="i in 4" :key="i" class="flex-1 rounded-full transition-colors" :class="barColor(i)" />
    </div>
    <p class="text-[10px] font-semibold text-right" :class="textColor">{{ strengthLabel }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  password: { type: String, default: '' }
})

const score = computed(() => {
  const p = props.password
  if (!p) return 0
  let s = 0
  if (p.length >= 8) s++
  if (/[A-Z]/.test(p)) s++
  if (/[0-9]/.test(p)) s++
  if (/[^A-Za-z0-9]/.test(p)) s++
  return s
})

const strengthLabel = computed(() => {
  if (score.value === 0) return 'Too Weak'
  if (score.value === 1) return 'Weak'
  if (score.value === 2) return 'Fair'
  if (score.value === 3) return 'Good'
  return 'Strong'
})

function barColor(index) {
  if (index > score.value) return 'bg-slate-200 dark:bg-slate-700'
  if (score.value <= 1) return 'bg-rose-500'
  if (score.value === 2) return 'bg-amber-500'
  if (score.value === 3) return 'bg-brand-500'
  return 'bg-emerald-500'
}

const textColor = computed(() => {
  if (score.value <= 1) return 'text-rose-500'
  if (score.value === 2) return 'text-amber-500'
  if (score.value === 3) return 'text-brand-500'
  return 'text-emerald-500'
})
</script>

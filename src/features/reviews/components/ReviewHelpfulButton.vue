<template>
  <button
    type="button"
    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 hover:border-brand-500 hover:text-brand-600 transition"
    :class="voted ? 'bg-brand-50 text-brand-600 border-brand-500' : ''"
    @click="vote"
  >
    <span>Helpful</span>
    <span class="font-bold text-[10px]">({{ count }})</span>
  </button>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({ helpfulCount: { type: Number, default: 0 } })
const count = ref(props.helpfulCount)
const voted = ref(false)
function vote() {
  if (!voted.value) {
    count.value++
    voted.value = true
  }
}
</script>

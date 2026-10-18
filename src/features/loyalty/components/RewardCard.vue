<template>
  <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-4">
    <div>
      <div class="flex items-center justify-between mb-2">
        <h4 class="text-sm font-bold text-slate-900 dark:text-white">{{ reward.title }}</h4>
        <span class="text-xs font-mono font-black text-brand-600 dark:text-brand-400">{{ reward.cost }} PTS</span>
      </div>
      <p class="text-xs text-slate-500 leading-relaxed">{{ reward.description }}</p>
    </div>
    <button
      class="w-full py-2.5 rounded-xl text-xs font-bold transition"
      :class="canRedeem ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'"
      :disabled="!canRedeem"
      @click="$emit('redeem', reward)"
    >
      {{ canRedeem ? 'Redeem Voucher' : 'Insufficient Points' }}
    </button>
  </div>
</template>
<script setup>
defineProps({ reward: Object, canRedeem: { type: Boolean, default: true } })
defineEmits(['redeem'])
</script>

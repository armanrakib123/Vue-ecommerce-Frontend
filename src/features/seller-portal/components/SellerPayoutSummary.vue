<template>
  <div class="p-6 rounded-3xl bg-slate-900 text-white space-y-4">
    <div>
      <p class="text-xs text-slate-400 font-semibold">Available for Payout</p>
      <h2 class="text-3xl font-black font-display mt-1 text-emerald-400 font-mono">${{ pending.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</h2>
      <p class="text-[11px] text-slate-400 mt-1">Automatic ACH direct deposit scheduled for Nov 01, 2026</p>
    </div>
    <div class="pt-2">
      <button class="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition">
        Instant Payout
      </button>
    </div>
  </div>
</template>
<script setup>
defineProps({ pending: { type: Number, default: 14650.00 } })
</script>

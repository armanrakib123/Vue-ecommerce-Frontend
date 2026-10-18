<template>
  <div class="p-8 rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-indigo-900 text-white shadow-xl relative overflow-hidden">
    <div class="relative z-10 space-y-4">
      <div class="flex items-center justify-between">
        <span class="text-xs font-bold uppercase tracking-widest text-brand-200">Nexora Circle</span>
        <span class="px-3 py-1 rounded-full text-xs font-black bg-amber-400 text-slate-950 uppercase tracking-wider">{{ tier }}</span>
      </div>
      <div>
        <p class="text-xs text-brand-200 font-medium">Available Balance</p>
        <h2 class="text-4xl font-black font-display mt-0.5">{{ points.toLocaleString() }} <span class="text-xl font-normal text-brand-200">PTS</span></h2>
      </div>
      <div class="space-y-1.5 pt-2">
        <div class="flex justify-between text-xs text-brand-200">
          <span>Progress to Diamond Tier</span>
          <span>{{ points }} / {{ nextTierPoints }} PTS</span>
        </div>
        <div class="w-full h-2 rounded-full bg-black/25 overflow-hidden">
          <div class="h-full bg-amber-400 rounded-full" :style="{ width: Math.min(100, (points / nextTierPoints) * 100) + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  points: { type: Number, default: 2450 },
  tier: { type: String, default: 'Platinum' },
  nextTierPoints: { type: Number, default: 3000 }
})
</script>

<template>
  <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
    <div class="flex items-center gap-4">
      <span class="text-4xl font-black text-slate-900 dark:text-white font-display">{{ averageRating.toFixed(1) }}</span>
      <div>
        <RatingStars :rating="Math.round(averageRating)" readonly />
        <p class="text-xs text-slate-500 mt-0.5">Based on {{ totalReviews }} customer reviews</p>
      </div>
    </div>
    <div class="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
      <div v-for="n in [5, 4, 3, 2, 1]" :key="n" class="flex items-center gap-3 text-xs">
        <span class="w-3 text-slate-500 font-bold">{{ n }}</span>
        <div class="flex-1 h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div class="h-full bg-amber-400 rounded-full" :style="{ width: getPercentage(n) + '%' }"></div>
        </div>
        <span class="w-8 text-right text-slate-400 text-[11px]">{{ getPercentage(n) }}%</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import RatingStars from './RatingStars.vue'
const props = defineProps({
  averageRating: { type: Number, default: 4.9 },
  totalReviews: { type: Number, default: 128 }
})
function getPercentage(star) {
  if (star === 5) return 85
  if (star === 4) return 10
  if (star === 3) return 3
  return 1
}
</script>

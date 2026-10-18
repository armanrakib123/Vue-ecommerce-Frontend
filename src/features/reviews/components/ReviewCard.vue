<template>
  <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3">
    <div class="flex items-start justify-between">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 font-bold flex items-center justify-center text-xs">
          {{ review.author[0] }}
        </div>
        <div>
          <div class="flex items-center gap-2">
            <h4 class="text-xs font-bold text-slate-900 dark:text-white">{{ review.author }}</h4>
            <span v-if="review.verified" class="text-[9px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.5 rounded">Verified Buyer</span>
          </div>
          <p class="text-[10px] text-slate-400">{{ review.date }}</p>
        </div>
      </div>
      <RatingStars :rating="review.rating" readonly />
    </div>
    <h5 class="text-sm font-bold text-slate-900 dark:text-slate-100">{{ review.title }}</h5>
    <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{{ review.content }}</p>
    <ReviewImages :images="review.images" />
    <div class="pt-2 flex justify-end">
      <ReviewHelpfulButton :helpful-count="review.helpfulCount" />
    </div>
  </div>
</template>
<script setup>
import RatingStars from './RatingStars.vue'
import ReviewImages from './ReviewImages.vue'
import ReviewHelpfulButton from './ReviewHelpfulButton.vue'
defineProps({ review: { type: Object, required: true } })
</script>

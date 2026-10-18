<template>
  <form @submit.prevent="handleSubmit" class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
    <h3 class="text-base font-bold text-slate-900 dark:text-white font-display">Write a Verified Review</h3>
    <div>
      <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Your Rating</label>
      <RatingStars v-model="form.rating" />
    </div>
    <BaseInput v-model="form.title" label="Review Title" placeholder="Summarize your experience..." :error="errors.title?.[0]" />
    <div>
      <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Detailed Review</label>
      <textarea
        v-model="form.comment"
        rows="4"
        class="w-full px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
        placeholder="What did you love about this item? Materials, fit, acoustic clarity..."
      ></textarea>
      <p v-if="errors.comment" class="text-[11px] text-rose-500 mt-1">{{ errors.comment[0] }}</p>
    </div>
    <BaseButton type="submit" variant="primary" size="sm" :loading="isSubmitting">Submit Review</BaseButton>
  </form>
</template>
<script setup>
import { ref } from 'vue'
import RatingStars from './RatingStars.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useReviewSubmission } from '../composables/useReviewSubmission.js'

const emit = defineEmits(['submitted'])
const form = ref({ rating: 5, title: '', comment: '', recommend: true })
const { isSubmitting, errors, submit } = useReviewSubmission((data) => {
  emit('submitted', data)
  form.value = { rating: 5, title: '', comment: '', recommend: true }
})
function handleSubmit() {
  submit(form.value)
}
</script>

import { ref } from 'vue'
import { validateReview } from '../schemas/review.schema.js'

export function useReviewSubmission(onSuccess) {
  const isSubmitting = ref(false)
  const errors = ref({})

  async function submit(formData) {
    const res = validateReview(formData)
    if (!res.success) {
      errors.value = res.error.flatten().fieldErrors
      return false
    }
    errors.value = {}
    isSubmitting.value = true
    try {
      await new Promise(r => setTimeout(r, 400))
      if (onSuccess) onSuccess(formData)
      return true
    } finally {
      isSubmitting.value = false
    }
  }

  return { isSubmitting, errors, submit }
}

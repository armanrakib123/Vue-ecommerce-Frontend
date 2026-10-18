<template>
  <div class="flex flex-col items-center justify-center text-center p-8 sm:p-12">
    <div class="w-16 h-16 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center mb-4">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    </div>
    <h3 class="text-base font-bold text-slate-900 dark:text-slate-100 mb-1">{{ title }}</h3>
    <p class="text-sm text-slate-500 max-w-sm mb-6">{{ message || 'Something went wrong while communicating with the service.' }}</p>
    <div class="flex gap-3">
      <button
        v-if="retryable"
        type="button"
        class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl transition shadow-sm"
        @click="$emit('retry')"
      >
        <span>Retry Request</span>
      </button>
      <slot name="extra" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: 'Unable to Load Data' },
  message: { type: String, default: '' },
  retryable: { type: Boolean, default: true },
})

defineEmits(['retry'])
</script>

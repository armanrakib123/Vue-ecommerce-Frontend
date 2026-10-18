<template>
  <div class="fixed bottom-5 right-5 z-50 flex flex-col gap-3 pointer-events-none max-w-sm w-full">
    <TransitionGroup
      enter-active-class="transform transition duration-300 ease-out"
      enter-from-class="translate-y-4 opacity-0 scale-95"
      enter-to-class="translate-y-0 opacity-100 scale-100"
      leave-active-class="transform transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-for="toast in notificationStore.toasts"
        :key="toast.id"
        class="pointer-events-auto rounded-xl p-4 shadow-xl border bg-white dark:bg-slate-900 flex items-start gap-3.5 backdrop-blur-md"
        :class="typeBorderClasses[toast.type]"
      >
        <div class="flex-shrink-0 mt-0.5">
          <span v-if="toast.type === 'success'" class="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
          <span v-else-if="toast.type === 'error'" class="w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 flex items-center justify-center text-xs font-bold">✕</span>
          <span v-else-if="toast.type === 'warning'" class="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center text-xs font-bold">!</span>
          <span v-else class="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-950 text-brand-600 flex items-center justify-center text-xs font-bold">i</span>
        </div>
        <div class="flex-1 min-w-0">
          <h4 v-if="toast.title" class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ toast.title }}</h4>
          <p class="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{{ toast.message }}</p>
        </div>
        <button
          type="button"
          class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5 rounded"
          @click="notificationStore.dismissToast(toast.id)"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { useNotificationStore } from '@/stores/notification.store.js'

const notificationStore = useNotificationStore()

const typeBorderClasses = {
  success: 'border-emerald-200 dark:border-emerald-900/60',
  error: 'border-rose-200 dark:border-rose-900/60',
  warning: 'border-amber-200 dark:border-amber-900/60',
  info: 'border-brand-200 dark:border-brand-900/60',
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm"
        @click="$emit('close')"
      />
    </Transition>

    <Transition
      enter-active-class="transform transition duration-300 ease-out"
      :enter-from-class="placement === 'right' ? 'translate-x-full' : '-translate-x-full'"
      enter-to-class="translate-x-0"
      leave-active-class="transform transition duration-200 ease-in"
      leave-from-class="translate-x-0"
      :leave-to-class="placement === 'right' ? 'translate-x-full' : '-translate-x-full'"
    >
      <div
        v-if="isOpen"
        :class="[
          'fixed inset-y-0 z-50 flex flex-col bg-white dark:bg-slate-900 shadow-2xl border-slate-200 dark:border-slate-800',
          placement === 'right' ? 'right-0 border-l' : 'left-0 border-r',
          widthClasses[width]
        ]"
      >
        <!-- Header -->
        <div class="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <slot name="header">
            <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">{{ title }}</h3>
          </slot>
          <button
            type="button"
            class="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            @click="$emit('close')"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Body -->
        <div class="flex-1 overflow-y-auto p-6">
          <slot />
        </div>

        <!-- Footer -->
        <div v-if="$slots.footer" class="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
          <slot name="footer" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  isOpen: { type: Boolean, default: false },
  title: { type: String, default: '' },
  placement: { type: String, default: 'right', validator: v => ['left', 'right'].includes(v) },
  width: { type: String, default: 'md', validator: v => ['sm', 'md', 'lg', 'xl'].includes(v) }
})

defineEmits(['close'])

const widthClasses = {
  sm: 'w-full max-w-sm',
  md: 'w-full max-w-md',
  lg: 'w-full max-w-lg',
  xl: 'w-full max-w-xl',
}
</script>

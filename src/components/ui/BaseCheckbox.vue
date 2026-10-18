<template>
  <label class="inline-flex items-start gap-2.5 cursor-pointer select-none">
    <div class="relative flex items-center mt-0.5">
      <input
        type="checkbox"
        :checked="modelValue"
        :disabled="disabled"
        class="peer sr-only"
        @change="$emit('update:modelValue', $event.target.checked)"
      />
      <div
        class="w-5 h-5 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 peer-checked:bg-brand-600 peer-checked:border-brand-600 transition-all flex items-center justify-center text-white peer-focus-visible:ring-2 peer-focus-visible:ring-brand-500 peer-focus-visible:ring-offset-2"
      >
        <svg v-if="modelValue" class="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
    <div v-if="label || $slots.default" class="text-sm text-slate-700 dark:text-slate-300">
      <slot>{{ label }}</slot>
    </div>
  </label>
</template>

<script setup>
defineProps({
  modelValue: { type: Boolean, default: false },
  label: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
})

defineEmits(['update:modelValue'])
</script>

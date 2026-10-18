<template>
  <label class="inline-flex items-center gap-2.5 cursor-pointer select-none">
    <div class="relative flex items-center">
      <input
        type="radio"
        :name="name"
        :value="value"
        :checked="modelValue === value"
        :disabled="disabled"
        class="peer sr-only"
        @change="$emit('update:modelValue', value)"
      />
      <div
        class="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 peer-checked:border-brand-600 transition-all flex items-center justify-center peer-focus-visible:ring-2 peer-focus-visible:ring-brand-500 peer-focus-visible:ring-offset-2"
      >
        <div v-if="modelValue === value" class="w-2.5 h-2.5 rounded-full bg-brand-600" />
      </div>
    </div>
    <div v-if="label || $slots.default" class="text-sm font-medium text-slate-700 dark:text-slate-300">
      <slot>{{ label }}</slot>
    </div>
  </label>
</template>

<script setup>
defineProps({
  modelValue: { type: [String, Number, Boolean], default: null },
  value: { type: [String, Number, Boolean], required: true },
  name: { type: String, default: '' },
  label: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
})

defineEmits(['update:modelValue'])
</script>

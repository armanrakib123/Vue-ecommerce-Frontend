<template>
  <div class="w-full">
    <label v-if="label" :for="id" class="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
      {{ label }}
      <span v-if="required" class="text-rose-500">*</span>
    </label>
    <div class="relative">
      <select
        :id="id"
        :value="modelValue"
        :disabled="disabled"
        :class="[
          'block w-full rounded-xl text-sm transition-all duration-200 border bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 pr-10 pl-4 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-offset-1',
          error
            ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-400'
            : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 focus:border-brand-500 focus:ring-brand-500/30',
          disabled ? 'opacity-60 bg-slate-50 cursor-not-allowed' : ''
        ]"
        @change="$emit('update:modelValue', $event.target.value)"
      >
        <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
        <option
          v-for="opt in options"
          :key="opt.value ?? opt"
          :value="opt.value ?? opt"
        >
          {{ opt.label ?? opt }}
        </option>
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
    <p v-if="error" class="mt-1 text-xs text-rose-500 font-medium">{{ error }}</p>
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: [String, Number], default: '' },
  options: { type: Array, required: true },
  id: { type: String, default: () => `select_${Math.random().toString(36).substring(2, 8)}` },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  error: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  required: { type: Boolean, default: false },
})

defineEmits(['update:modelValue'])
</script>

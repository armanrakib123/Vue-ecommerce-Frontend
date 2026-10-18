<template>
  <div>
    <div class="border-b border-slate-200 dark:border-slate-800">
      <nav class="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          type="button"
          :class="[
            'whitespace-nowrap py-3.5 px-1 border-b-2 font-medium text-sm transition-all focus:outline-none flex items-center gap-2',
            modelValue === tab.id
              ? 'border-brand-600 text-brand-600 dark:text-brand-400 font-semibold'
              : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-200'
          ]"
          @click="$emit('update:modelValue', tab.id)"
        >
          <component v-if="tab.icon" :is="tab.icon" class="w-4 h-4" />
          <span>{{ tab.label }}</span>
          <span
            v-if="tab.badge !== undefined"
            :class="[
              'ml-1 text-xs px-2 py-0.5 rounded-full font-semibold',
              modelValue === tab.id ? 'bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
            ]"
          >
            {{ tab.badge }}
          </span>
        </button>
      </nav>
    </div>
    <div class="mt-4">
      <slot :activeTab="modelValue" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: [String, Number], required: true },
  tabs: { type: Array, required: true }
})

defineEmits(['update:modelValue'])
</script>

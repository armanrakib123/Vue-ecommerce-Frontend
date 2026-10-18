<template>
  <div class="inline-flex items-center gap-1">
    <button
      v-for="star in 5"
      :key="star"
      type="button"
      :disabled="readonly"
      @click="!readonly && $emit('update:modelValue', star)"
      class="transition"
      :class="[
        readonly ? 'cursor-default' : 'hover:scale-110 cursor-pointer',
        star <= (modelValue || rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-200 dark:text-slate-700'
      ]"
    >
      ★
    </button>
  </div>
</template>
<script setup>
defineProps({
  modelValue: { type: Number, default: 5 },
  rating: { type: Number, default: 5 },
  readonly: { type: Boolean, default: false }
})
defineEmits(['update:modelValue'])
</script>

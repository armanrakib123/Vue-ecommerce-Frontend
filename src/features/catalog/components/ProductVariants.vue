<template>
  <div class="flex gap-2">
    <button v-for="v in variants" :key="v.id" class="px-3 py-1 rounded-lg border text-xs font-semibold" @click="$emit('select', v)">
      {{ v.name }}
    </button>
  </div>
</template>
<script setup>
defineProps({ variants: Array })
defineEmits(['select'])
</script>

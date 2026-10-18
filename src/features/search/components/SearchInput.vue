<template>
  <input v-model="q" class="p-2 border rounded text-xs" placeholder="Search..." @keyup.enter="$emit('search', q)" />
</template>
<script setup>
import { ref } from 'vue'
const q = ref('')
defineEmits(['search'])
</script>

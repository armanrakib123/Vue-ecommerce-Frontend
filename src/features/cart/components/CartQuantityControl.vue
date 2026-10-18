<template>
  <div class="flex border rounded">
    <button class="px-2" @click="$emit('decrement')">-</button>
    <span class="px-2 text-xs font-bold">{{ quantity }}</span>
    <button class="px-2" @click="$emit('increment')">+</button>
  </div>
</template>
<script setup>
defineProps({ quantity: Number })
defineEmits(['increment', 'decrement'])
</script>

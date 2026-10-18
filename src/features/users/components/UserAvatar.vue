<template>
  <img v-if="src" :src="src" :alt="alt" class="rounded-full object-cover border" />
  <div v-else class="rounded-full bg-brand-100 text-brand-600 font-bold flex items-center justify-center">
    {{ (alt[0] || 'U').toUpperCase() }}
  </div>
</template>
<script setup>
defineProps({ src: String, alt: { type: String, default: 'User' } })
</script>

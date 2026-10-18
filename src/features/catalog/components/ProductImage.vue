<template>
  <img :src="src" :alt="alt" class="object-cover rounded-2xl" />
</template>
<script setup>
defineProps({ src: String, alt: String })
</script>

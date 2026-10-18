<template>
  <button class="text-rose-500 font-bold" @click="$emit('toggle')">♥ Wishlist</button>
</template>
<script setup>
defineEmits(['toggle'])
</script>

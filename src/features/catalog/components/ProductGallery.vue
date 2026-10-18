<template>
  <div class="space-y-4">
    <img :src="active" class="w-full aspect-square rounded-3xl object-cover" />
    <div class="flex gap-2">
      <img v-for="img in images" :key="img" :src="img" class="w-16 h-16 rounded-xl object-cover cursor-pointer" @click="active = img" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({ images: Array })
const active = ref(props.images?.[0] || '')
</script>

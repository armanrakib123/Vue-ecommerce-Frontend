<template>
  <div v-if="images && images.length" class="flex flex-wrap gap-2 pt-2">
    <img
      v-for="(img, idx) in images"
      :key="idx"
      :src="img"
      alt="User photo"
      class="w-16 h-16 object-cover rounded-xl border border-slate-200 dark:border-slate-800"
    />
  </div>
</template>
<script setup>
defineProps({ images: { type: Array, default: () => [] } })
</script>

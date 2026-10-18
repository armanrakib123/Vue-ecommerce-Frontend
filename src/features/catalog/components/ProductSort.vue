<template>
  <select class="text-xs p-2 rounded-xl border bg-white dark:bg-slate-900" @change="$emit('sort', $event.target.value)">
    <option value="featured">Featured</option>
    <option value="price-asc">Price: Low to High</option>
    <option value="price-desc">Price: High to Low</option>
  </select>
</template>
<script setup>
defineEmits(['sort'])
</script>

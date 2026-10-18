<template>
  <div class="text-xs text-slate-400">Categories / {{ categoryName }}</div>
</template>
<script setup>
defineProps({ categoryName: String })
</script>

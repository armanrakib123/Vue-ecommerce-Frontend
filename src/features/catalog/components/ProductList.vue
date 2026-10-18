<template>
  <div class="space-y-4">
    <div v-for="p in products" :key="p.id" class="p-4 rounded-2xl bg-white dark:bg-slate-900 border flex gap-4 items-center">
      <img :src="p.thumbnail" class="w-16 h-16 rounded-xl object-cover" />
      <div class="flex-1 min-w-0">
        <h4 class="font-bold text-xs truncate">{{ p.name }}</h4>
        <p class="text-[11px] text-slate-400">${{ p.price }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({ products: Array })
</script>

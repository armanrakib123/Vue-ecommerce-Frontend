<template>
  <div class="flex items-center justify-between p-3 border rounded-xl">
    <div class="flex items-center gap-3">
      <img :src="item.image" class="w-12 h-12 rounded object-cover" />
      <div>
        <h4 class="font-bold text-xs">{{ item.name }}</h4>
        <p class="text-[11px] text-slate-400">${{ item.price }} x {{ item.quantity }}</p>
      </div>
    </div>
    <span class="font-bold text-xs">${{ item.price * item.quantity }}</span>
  </div>
</template>
<script setup>
defineProps({ item: Object })
</script>

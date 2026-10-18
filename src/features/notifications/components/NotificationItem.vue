<template>
  <div class="p-4 rounded-2xl border transition flex items-start justify-between gap-3" :class="item.read ? 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800/60' : 'bg-brand-50/40 dark:bg-brand-950/20 border-brand-200 dark:border-brand-900/60'">
    <div>
      <div class="flex items-center gap-2">
        <h4 class="text-xs font-bold text-slate-900 dark:text-white">{{ item.title }}</h4>
        <span v-if="!item.read" class="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
      </div>
      <p class="text-xs text-slate-500 mt-0.5 leading-relaxed">{{ item.message }}</p>
      <span class="text-[10px] text-slate-400 mt-1 block">{{ item.time }}</span>
    </div>
    <button v-if="!item.read" class="text-[10px] font-bold text-brand-600 hover:underline flex-shrink-0" @click="$emit('mark-read', item.id)">
      Mark read
    </button>
  </div>
</template>
<script setup>
defineProps({ item: Object })
defineEmits(['mark-read'])
</script>

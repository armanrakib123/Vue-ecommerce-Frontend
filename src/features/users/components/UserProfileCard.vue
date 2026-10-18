<template>
  <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center gap-4">
    <img :src="user?.avatar || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'" class="w-16 h-16 rounded-full object-cover" />
    <div>
      <h3 class="text-base font-bold text-slate-900 dark:text-white">{{ user?.name }}</h3>
      <p class="text-xs text-slate-400">{{ user?.email }}</p>
      <span class="inline-block mt-2 px-2.5 py-0.5 rounded text-[10px] font-bold bg-brand-50 text-brand-600">
        {{ user?.tier || 'Verified Customer' }}
      </span>
    </div>
  </div>
</template>
<script setup>
defineProps({ user: Object })
</script>

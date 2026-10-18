<template>
  <header class="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between">
    <div class="flex items-center gap-4">
      <h2 class="text-base font-bold text-slate-800 dark:text-slate-100 font-display">
        Enterprise Management Console
      </h2>
      <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200/50">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        Systems Nominal
      </span>
    </div>

    <div class="flex items-center gap-3">
      <RouterLink
        to="/"
        class="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-600 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition flex items-center gap-1.5"
      >
        <span>View Storefront</span>
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </RouterLink>
      <UserMenu />
    </div>
  </header>
</template>

<script setup>
import UserMenu from '@/components/navigation/UserMenu.vue'
</script>

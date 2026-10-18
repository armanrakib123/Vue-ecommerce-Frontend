<template>
  <div class="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
    <RoleSwitcherBar />

    <div class="flex-1 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md text-center mb-6">
        <RouterLink to="/" class="inline-flex items-center gap-2 mb-3">
          <img src="/logo.svg" alt="Nexora" class="w-10 h-10 rounded-xl shadow-md" />
          <span class="text-2xl font-black tracking-tight font-display text-slate-900 dark:text-white">NEXORA</span>
        </RouterLink>
        <p class="text-xs text-slate-500">Enterprise Unified Commerce Identity Access</p>
      </div>

      <div class="sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div class="bg-white dark:bg-slate-900 py-8 px-6 sm:px-10 shadow-xl border border-slate-200/80 dark:border-slate-800 rounded-3xl">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RoleSwitcherBar from '@/components/navigation/RoleSwitcherBar.vue'
</script>

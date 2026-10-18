<template>
  <aside class="w-64 bg-slate-900 text-slate-300 flex flex-col flex-shrink-0 border-r border-slate-800">
    <!-- Brand -->
    <div class="h-16 px-6 flex items-center justify-between border-b border-slate-800">
      <RouterLink to="/admin/dashboard" class="flex items-center gap-2.5">
        <img src="/logo.svg" alt="Nexora" class="w-7 h-7 rounded-lg" />
        <div class="flex flex-col">
          <span class="text-sm font-black text-white tracking-wider font-display">NEXORA</span>
          <span class="text-[9px] uppercase font-bold text-brand-400">ADMIN CONSOLE</span>
        </div>
      </RouterLink>
      <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-brand-900/60 text-brand-300 border border-brand-700/50">v1.0</span>
    </div>

    <!-- Navigation items -->
    <div class="flex-1 overflow-y-auto px-3 py-4 space-y-1">
      <div class="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">Core Management</div>
      <RouterLink
        v-for="item in navigationConfig.admin"
        :key="item.to"
        :to="item.to"
        class="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition"
        active-class="bg-brand-600 text-white font-bold hover:bg-brand-600"
      >
        <span>{{ item.label }}</span>
      </RouterLink>
    </div>

    <!-- Bottom Operator Info -->
    <div class="p-3 border-t border-slate-800 bg-slate-950/40 flex items-center justify-between">
      <div class="flex items-center gap-2.5 min-w-0">
        <div class="w-7 h-7 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs font-bold">
          A
        </div>
        <div class="min-w-0">
          <p class="text-xs font-bold text-white truncate">{{ authStore.userDisplayName }}</p>
          <p class="text-[10px] text-brand-400 truncate">{{ authStore.currentRole }}</p>
        </div>
      </div>
      <RouterLink to="/" class="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition" title="Return to Storefront">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </RouterLink>
    </div>
  </aside>
</template>

<script setup>
import { navigationConfig } from '@/config/navigation.config.js'
import { useAuthStore } from '@/stores/auth.store.js'

const authStore = useAuthStore()
</script>

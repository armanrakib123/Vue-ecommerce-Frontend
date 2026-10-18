<template>
  <div class="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
    <RoleSwitcherBar />

    <div class="flex-1 flex overflow-hidden">
      <!-- Support Sidebar -->
      <aside class="w-64 bg-slate-900 text-slate-300 flex flex-col flex-shrink-0 border-r border-slate-800">
        <div class="h-16 px-6 flex items-center justify-between border-b border-slate-800">
          <RouterLink to="/support/dashboard" class="flex items-center gap-2.5">
            <img src="/logo.svg" alt="Nexora" class="w-7 h-7 rounded-lg" />
            <div class="flex flex-col">
              <span class="text-sm font-black text-white font-display">NEXORA CARE</span>
              <span class="text-[9px] uppercase font-bold text-sky-400">SUPPORT OPERATIONS</span>
            </div>
          </RouterLink>
        </div>

        <div class="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          <RouterLink
            v-for="item in navigationConfig.support"
            :key="item.to"
            :to="item.to"
            class="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition"
            active-class="bg-sky-600 text-white font-bold hover:bg-sky-600"
          >
            <span>{{ item.label }}</span>
          </RouterLink>
        </div>

        <div class="p-4 border-t border-slate-800 bg-slate-950/40">
          <p class="text-xs font-bold text-white">Tier 2 Escalations</p>
          <p class="text-[10px] text-sky-400">Response SLA: &lt; 15 mins</p>
        </div>
      </aside>

      <!-- Main Support Area -->
      <div class="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header class="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between">
          <h2 class="text-base font-bold text-slate-800 dark:text-slate-100 font-display">Support Desk Workspace</h2>
          <div class="flex items-center gap-3">
            <RouterLink to="/" class="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-600 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800">
              Customer Storefront
            </RouterLink>
            <UserMenu />
          </div>
        </header>

        <main class="flex-1 p-6 sm:p-8 max-w-7xl w-full mx-auto">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { navigationConfig } from '@/config/navigation.config.js'
import RoleSwitcherBar from '@/components/navigation/RoleSwitcherBar.vue'
import UserMenu from '@/components/navigation/UserMenu.vue'
</script>

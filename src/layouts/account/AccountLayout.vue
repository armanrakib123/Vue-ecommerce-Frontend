<template>
  <div class="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
    <RoleSwitcherBar />
    <StorefrontHeader />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
      <div class="mb-6">
        <h1 class="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Customer Account</h1>
        <p class="text-xs text-slate-500">Manage your orders, profile, and security preferences</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Sidebar Navigation -->
        <aside class="lg:col-span-1">
          <div class="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-1">
            <div class="p-3 mb-2 flex items-center gap-3 border-b border-slate-100 dark:border-slate-800">
              <img
                :src="authStore.user?.avatar || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'"
                class="w-10 h-10 rounded-full object-cover"
                alt="Avatar"
              />
              <div class="min-w-0">
                <p class="text-xs font-bold text-slate-900 dark:text-white truncate">{{ authStore.userDisplayName }}</p>
                <p class="text-[10px] text-brand-600 dark:text-brand-400 font-semibold uppercase">{{ authStore.user?.tier || 'Member' }}</p>
              </div>
            </div>

            <RouterLink
              v-for="item in navigationConfig.customerAccount"
              :key="item.to"
              :to="item.to"
              class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              active-class="bg-brand-50 text-brand-600 dark:bg-brand-950/40 dark:text-brand-300 font-bold"
            >
              <span>{{ item.label }}</span>
            </RouterLink>
          </div>
        </aside>

        <!-- Right Content Area -->
        <main class="lg:col-span-3">
          <router-view />
        </main>
      </div>
    </div>

    <StorefrontFooter />
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth.store.js'
import { navigationConfig } from '@/config/navigation.config.js'
import RoleSwitcherBar from '@/components/navigation/RoleSwitcherBar.vue'
import StorefrontHeader from '@/layouts/storefront/StorefrontHeader.vue'
import StorefrontFooter from '@/layouts/storefront/StorefrontFooter.vue'

const authStore = useAuthStore()
</script>

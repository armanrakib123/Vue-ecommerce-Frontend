<template>
  <div class="relative">
    <BaseDropdown align="right">
      <template #trigger>
        <button
          type="button"
          class="flex items-center gap-2 p-1 rounded-full hover:ring-2 hover:ring-brand-500/20 transition focus:outline-none"
        >
          <img
            v-if="authStore.user?.avatar"
            :src="authStore.user.avatar"
            :alt="authStore.userDisplayName"
            class="w-8 h-8 rounded-full object-cover border border-slate-200 dark:border-slate-700"
          />
          <div
            v-else
            class="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/60 text-brand-600 dark:text-brand-300 font-bold flex items-center justify-center text-xs"
          >
            {{ (authStore.userDisplayName[0] || 'G').toUpperCase() }}
          </div>
          <span class="hidden md:block text-xs font-semibold text-slate-700 dark:text-slate-200">
            {{ authStore.userDisplayName }}
          </span>
        </button>
      </template>

      <template #default="{ close }">
        <div class="px-4 py-3 border-b border-slate-100 dark:border-slate-800">
          <p class="text-xs text-slate-400">Signed in as</p>
          <p class="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
            {{ authStore.user?.email || 'Guest' }}
          </p>
          <div class="mt-1">
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
              Role: {{ authStore.currentRole }}
            </span>
          </div>
        </div>

        <div class="py-1">
          <!-- Customer Links -->
          <RouterLink
            to="/account/profile"
            class="flex items-center px-4 py-2 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
            @click="close"
          >
            Customer Profile
          </RouterLink>
          <RouterLink
            to="/account/orders"
            class="flex items-center px-4 py-2 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
            @click="close"
          >
            My Orders
          </RouterLink>

          <!-- Portal Links by Role -->
          <div class="my-1 border-t border-slate-100 dark:border-slate-800"></div>
          <RouterLink
            to="/admin/dashboard"
            class="flex items-center px-4 py-2 text-xs text-brand-600 dark:text-brand-400 font-semibold hover:bg-brand-50 dark:hover:bg-brand-950/40"
            @click="close"
          >
            Admin Dashboard
          </RouterLink>
          <RouterLink
            to="/seller/dashboard"
            class="flex items-center px-4 py-2 text-xs text-brand-600 dark:text-brand-400 font-semibold hover:bg-brand-50 dark:hover:bg-brand-950/40"
            @click="close"
          >
            Seller Portal
          </RouterLink>
          <RouterLink
            to="/support/dashboard"
            class="flex items-center px-4 py-2 text-xs text-brand-600 dark:text-brand-400 font-semibold hover:bg-brand-50 dark:hover:bg-brand-950/40"
            @click="close"
          >
            Support Desk
          </RouterLink>
          <RouterLink
            to="/warehouse/dashboard"
            class="flex items-center px-4 py-2 text-xs text-brand-600 dark:text-brand-400 font-semibold hover:bg-brand-50 dark:hover:bg-brand-950/40"
            @click="close"
          >
            Warehouse Ops
          </RouterLink>

          <div class="my-1 border-t border-slate-100 dark:border-slate-800"></div>
          <button
            type="button"
            class="w-full text-left px-4 py-2 text-xs text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 font-medium"
            @click="handleLogout(close)"
          >
            Sign Out
          </button>
        </div>
      </template>
    </BaseDropdown>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import BaseDropdown from '@/components/ui/BaseDropdown.vue'
import { useAuthStore } from '@/stores/auth.store.js'

const authStore = useAuthStore()
const router = useRouter()

function handleLogout(close) {
  close()
  authStore.logout()
  router.push('/login')
}
</script>

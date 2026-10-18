<template>
  <div class="bg-slate-900 text-white text-xs px-4 py-2 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2 z-40 relative">
    <div class="flex items-center gap-2">
      <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-brand-500 text-white uppercase tracking-wider">
        FAANG RBAC Simulator
      </span>
      <span class="text-slate-300 hidden sm:inline">Active Persona:</span>
      <span class="font-bold text-white bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-700">
        {{ authStore.userDisplayName }} ({{ authStore.currentRole }})
      </span>
    </div>

    <!-- Quick persona select buttons -->
    <div class="flex items-center gap-1.5 flex-wrap">
      <span class="text-slate-400 text-[11px] hidden lg:inline">Switch Role:</span>
      <button
        v-for="persona in personas"
        :key="persona.role"
        type="button"
        :class="[
          'px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all duration-150',
          authStore.currentRole === persona.role
            ? 'bg-brand-600 text-white shadow-sm ring-1 ring-brand-400'
            : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
        ]"
        @click="switchTo(persona.role)"
      >
        {{ persona.label }}
      </button>

      <button
        type="button"
        :class="[
          'px-2 py-1 rounded-lg text-[11px] font-semibold transition-all duration-150',
          !authStore.isAuthenticated
            ? 'bg-rose-600 text-white ring-1 ring-rose-400'
            : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
        ]"
        @click="switchTo('guest')"
      >
        Guest
      </button>

      <!-- Dark mode switch -->
      <button
        type="button"
        class="ml-2 p-1 text-slate-400 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 transition"
        :title="preferencesStore.isDarkMode ? 'Switch to Light' : 'Switch to Dark'"
        @click="preferencesStore.toggleDarkMode"
      >
        <span v-if="preferencesStore.isDarkMode">☀️</span>
        <span v-else>🌙</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store.js'
import { usePreferencesStore } from '@/stores/preferences.store.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import { ROLES } from '@/permissions/roles.js'

const authStore = useAuthStore()
const preferencesStore = usePreferencesStore()
const notificationStore = useNotificationStore()
const router = useRouter()

const personas = [
  { role: ROLES.CUSTOMER, label: 'Customer' },
  { role: ROLES.ADMIN, label: 'Admin' },
  { role: ROLES.SELLER, label: 'Seller' },
  { role: ROLES.SUPPORT_AGENT, label: 'Support' },
  { role: ROLES.INVENTORY_MANAGER, label: 'Warehouse' },
  { role: ROLES.MARKETING_MANAGER, label: 'Marketing' },
]

function switchTo(role) {
  authStore.switchRolePersona(role)
  notificationStore.info(`Switched active session to ${role.toUpperCase()}`, 'RBAC Context Changed')
  
  // Optionally navigate to default role route
  const targetRoute = authStore.getDefaultPortalRoute()
  router.push(targetRoute)
}
</script>

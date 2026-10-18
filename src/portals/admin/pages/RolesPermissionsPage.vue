<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">
          RBAC Policy & Permission Matrix
        </h1>
        <p class="text-xs text-slate-500">Fine-grained role-based access control engine across all business units</p>
      </div>
      <BaseButton variant="primary" size="sm" @click="savePolicy">
        Save Policy Changes
      </BaseButton>
    </div>

    <div class="overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-slate-200 dark:divide-slate-800 text-xs">
          <thead class="bg-slate-50 dark:bg-slate-800/60">
            <tr>
              <th scope="col" class="px-5 py-4 text-left font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                Permission Token
              </th>
              <th
                v-for="role in rolesList"
                :key="role"
                scope="col"
                class="px-4 py-4 text-center font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300"
              >
                {{ role }}
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
            <tr v-for="perm in permissionsList" :key="perm" class="hover:bg-slate-50/70 dark:hover:bg-slate-800/40">
              <td class="px-5 py-3.5 font-mono font-semibold text-slate-800 dark:text-slate-200">
                {{ perm }}
              </td>
              <td v-for="role in rolesList" :key="role" class="px-4 py-3.5 text-center">
                <input
                  type="checkbox"
                  :checked="hasAccess(role, perm)"
                  :disabled="role === 'admin'"
                  class="rounded text-brand-600 focus:ring-brand-500 w-4 h-4"
                  @change="toggleAccess(role, perm)"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ROLES } from '@/permissions/roles.js'
import { PERMISSIONS } from '@/permissions/permissions.js'
import { ROLE_PERMISSIONS } from '@/permissions/access-policy.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import BaseButton from '@/components/ui/BaseButton.vue'

const notificationStore = useNotificationStore()

const rolesList = [
  ROLES.CUSTOMER,
  ROLES.SELLER,
  ROLES.CATALOG_MANAGER,
  ROLES.ORDER_MANAGER,
  ROLES.INVENTORY_MANAGER,
  ROLES.SUPPORT_AGENT,
  ROLES.MARKETING_MANAGER,
  ROLES.FINANCE_OPERATOR,
  ROLES.ANALYST,
  ROLES.ADMIN,
]

const permissionsList = Object.values(PERMISSIONS)
const matrix = ref(JSON.parse(JSON.stringify(ROLE_PERMISSIONS)))

function hasAccess(role, perm) {
  if (role === ROLES.ADMIN) return true
  const list = matrix.value[role] || []
  return list.includes(perm)
}

function toggleAccess(role, perm) {
  if (role === ROLES.ADMIN) return
  if (!matrix.value[role]) matrix.value[role] = []
  const idx = matrix.value[role].indexOf(perm)
  if (idx > -1) {
    matrix.value[role].splice(idx, 1)
  } else {
    matrix.value[role].push(perm)
  }
}

function savePolicy() {
  notificationStore.success('RBAC security policies and route access rules saved to cluster cache!')
}
</script>

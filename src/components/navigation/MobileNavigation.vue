<template>
  <BaseDrawer :is-open="isOpen" title="Nexora Navigation" placement="left" @close="$emit('close')">
    <div class="space-y-6">
      <div class="space-y-1">
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Storefront</h4>
        <RouterLink
          v-for="item in navigationConfig.storefront"
          :key="item.to"
          :to="item.to"
          class="flex items-center px-3 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          @click="$emit('close')"
        >
          {{ item.label }}
        </RouterLink>
      </div>

      <div class="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-1">
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Portals & Workspaces</h4>
        <RouterLink
          to="/account/profile"
          class="flex items-center px-3 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          @click="$emit('close')"
        >
          Customer Account
        </RouterLink>
        <RouterLink
          to="/admin/dashboard"
          class="flex items-center px-3 py-2 rounded-xl text-sm font-medium text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/40"
          @click="$emit('close')"
        >
          Admin Dashboard
        </RouterLink>
        <RouterLink
          to="/seller/dashboard"
          class="flex items-center px-3 py-2 rounded-xl text-sm font-medium text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/40"
          @click="$emit('close')"
        >
          Seller Portal
        </RouterLink>
        <RouterLink
          to="/support/dashboard"
          class="flex items-center px-3 py-2 rounded-xl text-sm font-medium text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/40"
          @click="$emit('close')"
        >
          Support Desk
        </RouterLink>
        <RouterLink
          to="/warehouse/dashboard"
          class="flex items-center px-3 py-2 rounded-xl text-sm font-medium text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/40"
          @click="$emit('close')"
        >
          Warehouse Operations
        </RouterLink>
      </div>
    </div>
  </BaseDrawer>
</template>

<script setup>
import BaseDrawer from '@/components/ui/BaseDrawer.vue'
import { navigationConfig } from '@/config/navigation.config.js'

defineProps({
  isOpen: { type: Boolean, default: false }
})

defineEmits(['close'])
</script>

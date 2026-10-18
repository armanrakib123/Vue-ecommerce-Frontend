<template>
  <div class="space-y-6">
    <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
        <div>
          <h2 class="text-lg font-bold text-slate-900 dark:text-white">Profile Overview</h2>
          <p class="text-xs text-slate-400">Personal details and customer credentials</p>
        </div>
        <span class="px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300">
          {{ authStore.user?.tier || 'Verified Customer' }}
        </span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Full Name</label>
          <input
            v-model="profile.name"
            class="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
          />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Email Address</label>
          <input
            v-model="profile.email"
            class="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
          />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Phone Number</label>
          <input
            v-model="profile.phone"
            class="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
          />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Member Since</label>
          <p class="text-xs font-semibold px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300">
            {{ profile.memberSince || 'January 2024' }}
          </p>
        </div>
      </div>

      <div class="mt-6 flex justify-end">
        <BaseButton variant="primary" size="sm" @click="saveProfile">
          Save Changes
        </BaseButton>
      </div>
    </div>

    <!-- Quick stats cards -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <StatCard title="Loyalty Points" :value="authStore.user?.loyaltyPoints || 3450" description="Eligible for $35 redeemable coupon" />
      <StatCard title="Total Orders" value="12" description="2 orders currently in transit" />
      <StatCard title="Saved Items" :value="wishlistStore.items.length" description="Tracked in personal wishlist" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth.store.js'
import { useWishlistStore } from '@/stores/wishlist.store.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import StatCard from '@/components/data-display/StatCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const authStore = useAuthStore()
const wishlistStore = useWishlistStore()
const notificationStore = useNotificationStore()

const profile = ref({
  name: authStore.user?.name || 'Sarah Connor',
  email: authStore.user?.email || 'sarah.customer@nexora.io',
  phone: authStore.user?.phone || '+1 (555) 234-5678',
  memberSince: authStore.user?.memberSince || '2023-01-15'
})

function saveProfile() {
  if (authStore.user) {
    authStore.user.name = profile.value.name
    authStore.user.email = profile.value.email
    authStore.user.phone = profile.value.phone
  }
  notificationStore.success('Profile credentials updated successfully')
}
</script>

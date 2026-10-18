<template>
  <div class="space-y-6 max-w-4xl">
    <div class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Merchant Storefront Profile</h1>
      <p class="text-xs text-slate-500">Public vendor branding, logo, support email, and policy declarations</p>
    </div>

    <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
      <div class="flex items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <img :src="profile.avatar" class="w-16 h-16 rounded-2xl object-cover" />
        <div>
          <h2 class="text-base font-bold text-slate-900 dark:text-white">{{ profile.storeName }}</h2>
          <span class="text-xs font-semibold text-emerald-500">Tier 1 Verified Marketplace Partner ✓</span>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <BaseInput v-model="profile.storeName" label="Storefront Public Name" />
        <BaseInput v-model="profile.email" label="Merchant Inquiries Email" />
        <BaseInput v-model="profile.phone" label="Vendor Phone" />
        <BaseInput v-model="profile.returnWindow" label="Return Window (Days)" type="number" />
        <div class="sm:col-span-2">
          <label class="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">Storefront Bio</label>
          <textarea
            v-model="profile.bio"
            rows="3"
            class="w-full text-xs p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-brand-500 outline-none"
          ></textarea>
        </div>
      </div>

      <div class="pt-4 flex justify-end">
        <BaseButton variant="primary" size="sm" @click="saveProfile">
          Save Merchant Profile
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNotificationStore } from '@/stores/notification.store.js'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const notificationStore = useNotificationStore()

const profile = ref({
  storeName: 'AuraTech Sound & Gear',
  email: 'marcus.seller@auratech.io',
  phone: '+1 (555) 489-0192',
  returnWindow: 30,
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  bio: 'Pioneers in beryllium acoustic transducer drivers and ergonomic titanium lifestyle electronics.'
})

function saveProfile() {
  notificationStore.success('Merchant profile and storefront metadata updated!')
}
</script>

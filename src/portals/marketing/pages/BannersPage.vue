<template>
  <div class="space-y-6">
    <div class="border-b border-slate-200 dark:border-slate-800 pb-4 flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Hero Banners & Content Placement</h1>
        <p class="text-xs text-slate-500">Homepage hero carousels, category spotlights, and promotional banners</p>
      </div>
      <BaseButton variant="primary" size="sm" @click="addBanner">
        + Upload Creative
      </BaseButton>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="b in banners" :key="b.id" class="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
        <div class="h-44 relative overflow-hidden">
          <img :src="b.image" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-slate-950/40" />
          <div class="absolute bottom-3 left-4 right-4 text-white">
            <span class="text-[10px] font-bold uppercase tracking-wider text-brand-300">{{ b.slot }}</span>
            <h3 class="text-base font-bold">{{ b.title }}</h3>
          </div>
        </div>
        <div class="p-4 flex items-center justify-between text-xs">
          <span class="text-slate-400">Target URL: <b class="text-slate-800 dark:text-slate-200">{{ b.target }}</b></span>
          <StatusBadge status="active" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNotificationStore } from '@/stores/notification.store.js'
import StatusBadge from '@/components/data-display/StatusBadge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const notificationStore = useNotificationStore()

const banners = ref([
  { id: '1', title: 'Autumn 2026 Innovation Drop', slot: 'Homepage Primary Hero', target: '/products', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800' },
  { id: '2', title: 'Aerospace Titanium Vanguard Watch', slot: 'Category Top Spotlight', target: '/products/chronos-vanguard-smartwatch', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800' }
])

function addBanner() {
  notificationStore.info('Creative media asset uploader opened')
}
</script>

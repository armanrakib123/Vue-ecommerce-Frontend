<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Customer Reviews Moderation</h1>
        <p class="text-xs text-slate-500">UGC compliance, sentiment verification, and verified buyer authenticity checks</p>
      </div>
    </div>

    <div class="space-y-4">
      <div
        v-for="rev in reviews"
        :key="rev.id"
        class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="text-xs font-bold text-amber-500">★ {{ rev.rating }}.0</span>
            <span class="text-xs font-bold text-slate-900 dark:text-white">{{ rev.author }}</span>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700">Verified Buyer ✓</span>
          </div>
          <StatusBadge :status="rev.status" />
        </div>

        <p class="text-xs font-bold text-slate-700 dark:text-slate-300">Product: {{ rev.productName }}</p>
        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic">"{{ rev.content }}"</p>

        <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs">
          <span class="text-[11px] text-slate-400">{{ rev.date }}</span>
          <div v-if="rev.status === 'pending'" class="flex gap-2">
            <button class="text-emerald-600 font-bold hover:underline" @click="moderate(rev, 'confirmed')">Approve Review</button>
            <button class="text-rose-500 font-bold hover:underline" @click="moderate(rev, 'cancelled')">Reject</button>
          </div>
          <span v-else class="text-slate-400 font-semibold">Moderated</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNotificationStore } from '@/stores/notification.store.js'
import StatusBadge from '@/components/data-display/StatusBadge.vue'

const notificationStore = useNotificationStore()

const reviews = ref([
  {
    id: 'r1',
    author: 'Michael Vance',
    productName: 'Lumina Sound Pro ANC Headphones',
    rating: 5,
    content: 'The acoustic tuning on these beryllium drivers is nothing short of incredible. ANC performs on par with Sony and Bose.',
    date: '2026-10-16',
    status: 'confirmed'
  },
  {
    id: 'r2',
    author: 'Jessica Huang',
    productName: 'Chronos Vanguard Titanium Smartwatch',
    rating: 5,
    content: 'Battery truly lasted 13 continuous days with 24/7 heart rate and GPS running. Titanium grade 5 body feels indestructible.',
    date: '2026-10-17',
    status: 'pending'
  }
])

function moderate(rev, status) {
  rev.status = status
  notificationStore.success(`Review from ${rev.author} marked as ${status.toUpperCase()}`)
}
</script>

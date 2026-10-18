<template>
  <nav class="flex text-xs text-slate-500 py-2.5" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-2">
      <li class="inline-flex items-center">
        <RouterLink to="/" class="hover:text-brand-600 transition flex items-center">
          <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Home
        </RouterLink>
      </li>
      <li v-for="(item, idx) in items" :key="idx" class="flex items-center">
        <svg class="w-3 h-3 text-slate-400 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <RouterLink
          v-if="item.to && idx !== items.length - 1"
          :to="item.to"
          class="hover:text-brand-600 transition"
        >
          {{ item.label }}
        </RouterLink>
        <span v-else class="font-medium text-slate-900 dark:text-slate-200">
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
defineProps({
  items: { type: Array, default: () => [] },
})
</script>

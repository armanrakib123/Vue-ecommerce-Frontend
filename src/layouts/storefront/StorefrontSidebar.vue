<template>
  <aside class="w-64 flex-shrink-0 hidden lg:block">
    <div class="sticky top-24 space-y-6">
      <div class="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <h3 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Browse Categories</h3>
        <ul class="space-y-1.5 text-sm">
          <li v-for="cat in categories" :key="cat.slug">
            <RouterLink
              :to="`/categories/${cat.slug}`"
              class="flex items-center justify-between px-3 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition font-medium"
              active-class="bg-brand-50 text-brand-700 dark:bg-brand-950/40 dark:text-brand-300 font-bold"
            >
              <span>{{ cat.name }}</span>
              <span class="text-xs text-slate-400">{{ cat.productCount }}</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { mockCategories } from '@/mocks/fixtures/categories.json.js'

const categories = mockCategories
</script>

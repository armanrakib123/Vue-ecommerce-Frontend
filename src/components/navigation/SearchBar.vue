<template>
  <div class="relative w-full max-w-lg">
    <div class="relative flex items-center">
      <input
        type="search"
        v-model="query"
        :placeholder="placeholder"
        class="w-full pl-10 pr-12 py-2.5 text-sm bg-slate-100 dark:bg-slate-800/80 border border-transparent dark:border-slate-700/60 rounded-full focus:bg-white dark:focus:bg-slate-900 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all outline-none text-slate-900 dark:text-slate-100 placeholder-slate-400"
        @keyup.enter="handleSearch"
      />
      <div class="absolute left-3.5 pointer-events-none text-slate-400">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <button
        v-if="query"
        type="button"
        class="absolute right-3 p-1 text-slate-400 hover:text-slate-600 rounded-full"
        @click="query = ''"
      >
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  placeholder: { type: String, default: 'Search headphones, watches, bags...' }
})

const router = useRouter()
const query = ref('')

function handleSearch() {
  if (query.value.trim()) {
    router.push({ path: '/search', query: { q: query.value.trim() } })
  }
}
</script>

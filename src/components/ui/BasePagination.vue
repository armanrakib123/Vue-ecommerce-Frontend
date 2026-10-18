<template>
  <div class="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 px-4 py-3 sm:px-6">
    <div class="flex flex-1 justify-between sm:hidden">
      <button
        :disabled="currentPage <= 1"
        class="relative inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
        @click="$emit('change', currentPage - 1)"
      >
        Previous
      </button>
      <button
        :disabled="currentPage >= totalPages"
        class="relative ml-3 inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
        @click="$emit('change', currentPage + 1)"
      >
        Next
      </button>
    </div>
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-slate-600 dark:text-slate-400">
          Showing <span class="font-semibold text-slate-900 dark:text-slate-100">{{ (currentPage - 1) * pageSize + 1 }}</span>
          to <span class="font-semibold text-slate-900 dark:text-slate-100">{{ Math.min(currentPage * pageSize, total) }}</span>
          of <span class="font-semibold text-slate-900 dark:text-slate-100">{{ total }}</span> results
        </p>
      </div>
      <div>
        <nav class="isolate inline-flex -space-x-px rounded-xl shadow-sm" aria-label="Pagination">
          <button
            :disabled="currentPage <= 1"
            class="relative inline-flex items-center rounded-l-xl px-2.5 py-2 text-slate-400 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus:z-20 disabled:opacity-40"
            @click="$emit('change', currentPage - 1)"
          >
            <span class="sr-only">Previous</span>
            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
            </svg>
          </button>
          
          <button
            v-for="p in pages"
            :key="p"
            type="button"
            :class="[
              'relative inline-flex items-center px-3.5 py-2 text-sm font-semibold focus:z-20',
              p === currentPage
                ? 'z-10 bg-brand-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600'
                : 'text-slate-900 dark:text-slate-100 ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
            ]"
            @click="$emit('change', p)"
          >
            {{ p }}
          </button>

          <button
            :disabled="currentPage >= totalPages"
            class="relative inline-flex items-center rounded-r-xl px-2.5 py-2 text-slate-400 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus:z-20 disabled:opacity-40"
            @click="$emit('change', currentPage + 1)"
          >
            <span class="sr-only">Next</span>
            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: { type: Number, required: true },
  pageSize: { type: Number, default: 10 },
  total: { type: Number, required: true },
})

defineEmits(['change'])

const totalPages = computed(() => Math.ceil(props.total / props.pageSize) || 1)

const pages = computed(() => {
  const arr = []
  for (let i = 1; i <= Math.min(5, totalPages.value); i++) {
    arr.push(i)
  }
  return arr
})
</script>

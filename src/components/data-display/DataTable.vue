<template>
  <div class="space-y-4">
    <!-- Toolbar -->
    <div v-if="$slots.toolbar || showSearch" class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
      <div v-if="showSearch" class="relative max-w-sm w-full">
        <input
          type="text"
          :value="searchQuery"
          :placeholder="searchPlaceholder"
          class="w-full pl-9 pr-4 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 outline-none"
          @input="$emit('update:searchQuery', $event.target.value)"
        />
        <svg class="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <div class="flex items-center gap-2">
        <slot name="toolbar" />
      </div>
    </div>

    <!-- Table -->
    <BaseTable :columns="columns" :rows="rows">
      <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
        <slot :name="slotName" v-bind="slotProps" />
      </template>
    </BaseTable>

    <!-- Pagination -->
    <BasePagination
      v-if="pagination"
      :current-page="pagination.currentPage"
      :page-size="pagination.pageSize"
      :total="pagination.total"
      @change="$emit('page-change', $event)"
    />
  </div>
</template>

<script setup>
import BaseTable from '@/components/ui/BaseTable.vue'
import BasePagination from '@/components/ui/BasePagination.vue'

defineProps({
  columns: { type: Array, required: true },
  rows: { type: Array, default: () => [] },
  pagination: { type: Object, default: null },
  showSearch: { type: Boolean, default: false },
  searchQuery: { type: String, default: '' },
  searchPlaceholder: { type: String, default: 'Filter items...' },
})

defineEmits(['update:searchQuery', 'page-change'])
</script>

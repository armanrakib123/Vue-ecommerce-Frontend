import { ref, computed } from 'vue'

export function usePagination(options = {}) {
  const currentPage = ref(options.initialPage || 1)
  const pageSize = ref(options.initialPageSize || 12)
  const totalItems = ref(options.total || 0)

  const totalPages = computed(() => Math.ceil(totalItems.value / pageSize.value) || 1)
  const hasNextPage = computed(() => currentPage.value < totalPages.value)
  const hasPrevPage = computed(() => currentPage.value > 1)

  function nextPage() {
    if (hasNextPage.value) currentPage.value++
  }

  function prevPage() {
    if (hasPrevPage.value) currentPage.value--
  }

  function setPage(page) {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page
    }
  }

  return {
    currentPage,
    pageSize,
    totalItems,
    totalPages,
    hasNextPage,
    hasPrevPage,
    nextPage,
    prevPage,
    setPage,
  }
}

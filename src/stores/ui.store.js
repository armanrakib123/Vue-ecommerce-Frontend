import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const isSidebarOpen = ref(false)
  const isMiniCartOpen = ref(false)
  const isSearchModalOpen = ref(false)
  const isRoleSwitcherOpen = ref(false)
  const globalLoading = ref(false)
  const loadingMessage = ref('')

  function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  function setMiniCart(open) {
    isMiniCartOpen.value = open
  }

  function setSearchModal(open) {
    isSearchModalOpen.value = open
  }

  function setRoleSwitcher(open) {
    isRoleSwitcherOpen.value = open
  }

  function startGlobalLoading(msg = 'Processing...') {
    loadingMessage.value = msg
    globalLoading.value = true
  }

  function stopGlobalLoading() {
    globalLoading.value = false
    loadingMessage.value = ''
  }

  return {
    isSidebarOpen,
    isMiniCartOpen,
    isSearchModalOpen,
    isRoleSwitcherOpen,
    globalLoading,
    loadingMessage,
    toggleSidebar,
    setMiniCart,
    setSearchModal,
    setRoleSwitcher,
    startGlobalLoading,
    stopGlobalLoading,
  }
})

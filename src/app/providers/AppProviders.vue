<template>
  <div class="nexora-app-providers contents">
    <slot />
    <!-- Global Notifications & Toasts -->
    <ToastContainer />
    <!-- Global Loading Overlay -->
    <LoadingOverlay :show="uiStore.globalLoading" :message="uiStore.loadingMessage" />
  </div>
</template>

<script setup>
import { useUiStore } from '@/stores/ui.store.js'
import ToastContainer from '@/components/feedback/ToastContainer.vue'
import LoadingOverlay from '@/components/feedback/LoadingOverlay.vue'

const uiStore = useUiStore()
</script>

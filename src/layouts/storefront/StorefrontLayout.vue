<template>
  <div class="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
    <!-- Top Interactive Persona & RBAC Switcher -->
    <RoleSwitcherBar />

    <!-- Main Navigation Bar -->
    <StorefrontHeader />

    <!-- Main Page Content -->
    <main class="flex-1">
      <router-view />
    </main>

    <!-- Mini Cart Drawer -->
    <MiniCart />

    <!-- Mobile Drawer -->
    <MobileNavigation :is-open="uiStore.isSidebarOpen" @close="uiStore.toggleSidebar" />

    <!-- Storefront Footer -->
    <StorefrontFooter />
  </div>
</template>

<script setup>
import { useUiStore } from '@/stores/ui.store.js'
import RoleSwitcherBar from '@/components/navigation/RoleSwitcherBar.vue'
import StorefrontHeader from './StorefrontHeader.vue'
import StorefrontFooter from './StorefrontFooter.vue'
import MobileNavigation from '@/components/navigation/MobileNavigation.vue'
import MiniCart from '@/features/cart/components/MiniCart.vue'

const uiStore = useUiStore()
</script>

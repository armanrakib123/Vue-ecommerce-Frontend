<template>
  <header class="sticky top-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 gap-4">
        <!-- Left: Mobile Menu & Brand -->
        <div class="flex items-center gap-3">
          <button
            type="button"
            class="md:hidden p-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-200"
            @click="uiStore.toggleSidebar"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <RouterLink to="/" class="flex items-center gap-2.5 group">
            <img src="/logo.svg" alt="Nexora Logo" class="w-8 h-8 rounded-lg shadow-sm transition transform group-hover:scale-105" />
            <div class="flex flex-col">
              <span class="text-lg font-black tracking-tight text-slate-900 dark:text-white leading-none font-display">
                NEXORA
              </span>
              <span class="text-[9px] uppercase tracking-widest text-brand-600 dark:text-brand-400 font-bold">
                COMMERCE
              </span>
            </div>
          </RouterLink>
        </div>

        <!-- Center: SearchBar & Nav -->
        <div class="hidden lg:flex items-center gap-6 flex-1 max-w-xl mx-4">
          <SearchBar />
        </div>

        <MainNavigation class="hidden xl:flex" />

        <!-- Right: Actions -->
        <div class="flex items-center gap-2 sm:gap-3">
          <!-- Wishlist -->
          <RouterLink
            to="/account/wishlist"
            class="relative p-2 text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition"
            title="Wishlist"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span
              v-if="wishlistStore.items.length > 0"
              class="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white dark:ring-slate-900"
            >
              {{ wishlistStore.items.length }}
            </span>
          </RouterLink>

          <!-- Cart Trigger -->
          <button
            type="button"
            class="relative p-2 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition"
            title="View Cart"
            @click="uiStore.setMiniCart(true)"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span
              v-if="cartStore.totalItemsCount > 0"
              class="absolute -top-1 -right-1 bg-brand-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white dark:ring-slate-900"
            >
              {{ cartStore.totalItemsCount }}
            </span>
          </button>

          <!-- User Menu -->
          <UserMenu />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useCartStore } from '@/stores/cart.store.js'
import { useWishlistStore } from '@/stores/wishlist.store.js'
import { useUiStore } from '@/stores/ui.store.js'
import SearchBar from '@/components/navigation/SearchBar.vue'
import MainNavigation from '@/components/navigation/MainNavigation.vue'
import UserMenu from '@/components/navigation/UserMenu.vue'

const cartStore = useCartStore()
const wishlistStore = useWishlistStore()
const uiStore = useUiStore()
</script>

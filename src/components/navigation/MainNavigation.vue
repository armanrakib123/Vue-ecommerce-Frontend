<template>
  <nav class="hidden md:flex items-center space-x-6">
    <RouterLink
      v-for="item in navigationConfig.storefront"
      :key="item.to"
      :to="item.to"
      class="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition"
      active-class="text-brand-600 dark:text-brand-400 font-semibold"
    >
      {{ item.label }}
    </RouterLink>
  </nav>
</template>

<script setup>
import { navigationConfig } from '@/config/navigation.config.js'
</script>

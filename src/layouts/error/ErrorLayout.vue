<template>
  <div class="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
    <RoleSwitcherBar />
    <div class="flex-1 flex items-center justify-center p-6">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import RoleSwitcherBar from '@/components/navigation/RoleSwitcherBar.vue'
</script>

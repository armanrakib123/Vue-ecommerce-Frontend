<template>
  <div class="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
    <RoleSwitcherBar />

    <div class="flex-1 flex overflow-hidden">
      <!-- Admin Sidebar -->
      <AdminSidebar />

      <!-- Main Panel Area -->
      <div class="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <AdminHeader />
        <main class="flex-1 p-6 sm:p-8 max-w-7xl w-full mx-auto">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import RoleSwitcherBar from '@/components/navigation/RoleSwitcherBar.vue'
import AdminSidebar from './AdminSidebar.vue'
import AdminHeader from './AdminHeader.vue'
</script>

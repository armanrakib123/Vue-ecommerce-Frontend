<template>
  <div class="max-w-5xl mx-auto px-4 py-12 space-y-12">
    <div class="text-center max-w-2xl mx-auto space-y-3">
      <span class="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 dark:bg-brand-950/60 px-3 py-1 rounded-full">Support Knowledge Base</span>
      <h1 class="text-3xl font-black text-slate-900 dark:text-white font-display">How can our engineering desk assist you?</h1>
      <p class="text-xs text-slate-500">Search troubleshooting manuals, shipping schedules, and warranty policies</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
        <h3 class="text-sm font-bold text-slate-900 dark:text-white">Shipping & Customs</h3>
        <p class="text-xs text-slate-500">Track cross-border air couriers, taxes, and estimated delivery windows.</p>
        <RouterLink to="/support/tickets" class="text-xs font-bold text-brand-600 inline-block pt-2">View Articles →</RouterLink>
      </div>
      <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
        <h3 class="text-sm font-bold text-slate-900 dark:text-white">Hardware Warranty</h3>
        <p class="text-xs text-slate-500">All audio and electronics carry 2-year no-hassle hardware replacement.</p>
        <RouterLink to="/account/returns" class="text-xs font-bold text-brand-600 inline-block pt-2">Warranty Claims →</RouterLink>
      </div>
      <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
        <h3 class="text-sm font-bold text-slate-900 dark:text-white">Live Escalations</h3>
        <p class="text-xs text-slate-500">Open a high-priority ticket with our Tier-2 product specialists.</p>
        <RouterLink to="/support/tickets" class="text-xs font-bold text-brand-600 inline-block pt-2">Open Ticket →</RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup></script>

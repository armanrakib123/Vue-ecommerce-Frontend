<template>
  <div class="space-y-6 max-w-4xl">
    <div class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Merchant Store Settings</h1>
      <p class="text-xs text-slate-500">Fulfillment configurations, automated courier dispatch, and webhook endpoints</p>
    </div>

    <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
      <h3 class="text-sm font-bold text-slate-900 dark:text-white">Shipping & Carrier Integrations</h3>
      <div class="space-y-3">
        <div class="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40">
          <div>
            <p class="text-xs font-bold text-slate-900 dark:text-white">FedEx Ground & Express Integration</p>
            <p class="text-[11px] text-slate-400">Automated thermal label generation and pickup scheduling</p>
          </div>
          <span class="text-xs font-bold text-emerald-500">Connected ✓</span>
        </div>

        <div class="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40">
          <div>
            <p class="text-xs font-bold text-slate-900 dark:text-white">DHL Worldwide Priority Hub</p>
            <p class="text-[11px] text-slate-400">International commercial customs and duty prepaid calculation</p>
          </div>
          <span class="text-xs font-bold text-emerald-500">Connected ✓</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

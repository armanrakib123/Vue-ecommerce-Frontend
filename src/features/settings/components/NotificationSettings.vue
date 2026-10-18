<template>
  <div class="space-y-4 max-w-xl">
    <h4 class="text-sm font-bold text-slate-900 dark:text-white">System Notifications</h4>
    <div class="space-y-3 text-xs">
      <label class="flex items-center justify-between cursor-pointer">
        <span>Critical Security Alerts</span>
        <input type="checkbox" checked disabled class="rounded text-brand-600" />
      </label>
      <label class="flex items-center justify-between cursor-pointer">
        <span>Order State Telemetry SMS</span>
        <input type="checkbox" checked class="rounded text-brand-600" />
      </label>
    </div>
  </div>
</template>
<script setup></script>

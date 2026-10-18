<template>
  <div class="space-y-4 max-w-xl">
    <h4 class="text-sm font-bold text-slate-900 dark:text-white">Appearance & Theme</h4>
    <div class="grid grid-cols-2 gap-4">
      <button
        type="button"
        @click="preferencesStore.setDarkMode(false)"
        class="p-4 rounded-2xl border text-left transition"
        :class="!preferencesStore.isDarkMode ? 'border-brand-500 bg-brand-50/20' : 'border-slate-200 dark:border-slate-800'"
      >
        <div class="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-xs mb-2">☀️</div>
        <p class="text-xs font-bold text-slate-900 dark:text-white">Studio Light</p>
        <p class="text-[11px] text-slate-500">Crisp high-contrast daylight</p>
      </button>

      <button
        type="button"
        @click="preferencesStore.setDarkMode(true)"
        class="p-4 rounded-2xl border text-left transition"
        :class="preferencesStore.isDarkMode ? 'border-brand-500 bg-slate-900 text-white' : 'border-slate-200 dark:border-slate-800'"
      >
        <div class="w-8 h-8 rounded-lg bg-slate-950 text-white flex items-center justify-center text-xs mb-2">🌙</div>
        <p class="text-xs font-bold text-slate-900 dark:text-white">Obsidian Dark</p>
        <p class="text-[11px] text-slate-500">Deep OLED slate aesthetic</p>
      </button>
    </div>
  </div>
</template>
<script setup>
import { usePreferencesStore } from '@/stores/preferences.store.js'
const preferencesStore = usePreferencesStore()
</script>

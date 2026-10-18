<template>
  <div class="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-6">
    <ThemeSettings />
    <LanguageSettings />
  </div>
</template>
<script setup>
import ThemeSettings from '../components/ThemeSettings.vue'
import LanguageSettings from '../components/LanguageSettings.vue'
</script>

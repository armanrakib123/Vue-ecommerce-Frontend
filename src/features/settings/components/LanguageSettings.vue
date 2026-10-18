<template>
  <div class="space-y-3 max-w-xl">
    <h4 class="text-sm font-bold text-slate-900 dark:text-white">Localization & Language</h4>
    <div class="grid grid-cols-2 gap-4">
      <button
        type="button"
        @click="setLocale('en')"
        class="p-4 rounded-2xl border text-left transition"
        :class="locale === 'en' ? 'border-brand-500 bg-brand-50/20' : 'border-slate-200 dark:border-slate-800'"
      >
        <p class="text-xs font-bold text-slate-900 dark:text-white">English (US)</p>
        <p class="text-[11px] text-slate-500">Global Enterprise Standard</p>
      </button>

      <button
        type="button"
        @click="setLocale('bn')"
        class="p-4 rounded-2xl border text-left transition"
        :class="locale === 'bn' ? 'border-brand-500 bg-brand-50/20' : 'border-slate-200 dark:border-slate-800'"
      >
        <p class="text-xs font-bold text-slate-900 dark:text-white">বাংলা (Bengali)</p>
        <p class="text-[11px] text-slate-500">বাংলা ভাষা ইন্টারফেস</p>
      </button>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from '@/i18n/index.js'
const { locale, setLocale } = useI18n()
</script>

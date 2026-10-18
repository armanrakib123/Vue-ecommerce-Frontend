<template>
  <div class="flex gap-3 text-xs" :class="isSupport ? 'flex-row-reverse' : ''">
    <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-[11px] flex-shrink-0" :class="isSupport ? 'bg-sky-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200'">
      {{ isSupport ? 'AGT' : 'USR' }}
    </div>
    <div class="max-w-lg rounded-2xl p-4 shadow-sm" :class="isSupport ? 'bg-sky-600 text-white rounded-tr-none' : 'bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none'">
      <div class="flex items-center justify-between gap-4 mb-1 text-[10px]" :class="isSupport ? 'text-sky-100' : 'text-slate-400'">
        <span class="font-bold">{{ message.senderName }}</span>
        <span>{{ new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}</span>
      </div>
      <p class="leading-relaxed">{{ message.text }}</p>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({ message: Object })
const isSupport = computed(() => props.message.sender === 'support' || props.message.sender === 'agent')
</script>

<template>
  <div class="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-end gap-3 rounded-b-3xl">
    <textarea
      v-model="text"
      rows="2"
      placeholder="Type your response to the customer or agent..."
      class="flex-1 px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs focus:outline-none focus:ring-2 focus:ring-sky-500"
      @keydown.enter.prevent="send"
    ></textarea>
    <button class="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition shadow-sm" @click="send">
      Send
    </button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const emit = defineEmits(['send'])
const text = ref('')
function send() {
  if (text.value.trim()) {
    emit('send', text.value.trim())
    text.value = ''
  }
}
</script>

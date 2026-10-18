<template>
  <div ref="dropdownRef" class="relative inline-block text-left">
    <div @click="toggle">
      <slot name="trigger" :isOpen="isOpen">
        <button
          type="button"
          class="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 focus:outline-none"
        >
          <span>Options</span>
          <svg class="w-4 h-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </slot>
    </div>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="isOpen"
        :class="[
          'absolute z-50 mt-2 rounded-xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 focus:outline-none py-1.5 min-w-[12rem]',
          align === 'right' ? 'right-0' : 'left-0'
        ]"
      >
        <slot :close="close" />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useClickOutside } from '@/composables/useClickOutside.js'

defineProps({
  align: { type: String, default: 'right', validator: v => ['left', 'right'].includes(v) }
})

const isOpen = ref(false)
const dropdownRef = ref(null)

function toggle() {
  isOpen.value = !isOpen.value
}

function close() {
  isOpen.value = false
}

useClickOutside(dropdownRef, () => {
  close()
})

defineExpose({ close, toggle })
</script>

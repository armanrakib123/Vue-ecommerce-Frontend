<template>
  <BaseModal :is-open="isOpen" :title="title" max-width="md" @close="$emit('cancel')">
    <div class="py-2">
      <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{{ message }}</p>
    </div>
    <template #footer>
      <BaseButton variant="secondary" @click="$emit('cancel')">{{ cancelText }}</BaseButton>
      <BaseButton :variant="confirmVariant" :loading="loading" @click="$emit('confirm')">{{ confirmText }}</BaseButton>
    </template>
  </BaseModal>
</template>

<script setup>
import BaseModal from '@/components/ui/BaseModal.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

defineProps({
  isOpen: { type: Boolean, default: false },
  title: { type: String, default: 'Confirm Action' },
  message: { type: String, default: 'Are you sure you want to proceed?' },
  confirmText: { type: String, default: 'Confirm' },
  cancelText: { type: String, default: 'Cancel' },
  confirmVariant: { type: String, default: 'danger' },
  loading: { type: Boolean, default: false },
})

defineEmits(['confirm', 'cancel'])
</script>

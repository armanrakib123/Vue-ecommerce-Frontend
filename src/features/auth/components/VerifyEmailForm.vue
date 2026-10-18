<template>
  <div class="text-center space-y-4">
    <p class="text-xs text-slate-500">We sent a verification link to your inbox. Tap the link to verify.</p>
    <BaseButton variant="secondary" size="sm" @click="$emit('resend')">Resend Email</BaseButton>
  </div>
</template>

<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
defineEmits(['resend'])
</script>

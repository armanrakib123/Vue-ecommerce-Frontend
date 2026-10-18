<template>
  <form @submit.prevent="$emit('verify', otp)" class="space-y-4">
    <BaseInput v-model="otp" label="6-Digit Verification Code" placeholder="849201" required />
    <BaseButton type="submit" variant="primary" full-width>Verify Code</BaseButton>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const otp = ref('')
defineEmits(['verify'])
</script>

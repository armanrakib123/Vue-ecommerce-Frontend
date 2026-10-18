<template>
  <form @submit.prevent="$emit('submit', form)" class="space-y-3">
    <BaseInput v-model="form.street" label="Street" required />
    <BaseInput v-model="form.city" label="City" required />
    <BaseInput v-model="form.postalCode" label="Postal Code" required />
    <BaseButton type="submit" variant="primary" size="sm">Save Address</BaseButton>
  </form>
</template>
<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
defineEmits(['submit'])
const form = ref({ street: '', city: '', postalCode: '' })
</script>

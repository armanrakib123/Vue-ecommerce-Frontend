<template>
  <form @submit.prevent="$emit('save', form)" class="space-y-4">
    <BaseInput v-model="form.name" label="Full Name" required />
    <BaseInput v-model="form.email" label="Email Address" type="email" required />
    <BaseInput v-model="form.phone" label="Phone" />
    <BaseButton type="submit" variant="primary" size="sm">Save Profile</BaseButton>
  </form>
</template>
<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
const props = defineProps({ initial: Object })
defineEmits(['save'])
const form = ref({ ...props.initial })
</script>

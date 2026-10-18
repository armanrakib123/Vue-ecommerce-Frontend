<template>
  <form @submit.prevent="$emit('save', form)" class="space-y-4 max-w-xl">
    <BaseInput v-model="form.storeName" label="Store Brand Name" required />
    <BaseInput v-model="form.legalEntity" label="Legal Business Entity" required />
    <BaseInput v-model="form.taxId" label="Employer ID / Tax ID" required />
    <BaseInput v-model="form.supportEmail" label="Merchant Support Email" type="email" required />
    <BaseButton type="submit" variant="primary" size="sm">Save Changes</BaseButton>
  </form>
</template>
<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
const props = defineProps({ profile: Object })
defineEmits(['save'])
const form = ref({ ...props.profile })
</script>

<template>
  <form @submit.prevent="$emit('save', form)" class="space-y-4 max-w-xl">
    <BaseInput v-model="form.storeName" label="Platform Display Name" required />
    <BaseInput v-model="form.supportEmail" label="System Notification Sender Email" type="email" required />
    <BaseInput v-model="form.orderPrefix" label="Order ID Format Prefix" required />
    <label class="flex items-center gap-2 text-xs cursor-pointer">
      <input type="checkbox" v-model="form.maintenanceMode" class="rounded text-brand-600" />
      <span class="font-bold text-slate-800 dark:text-slate-200">Enable Maintenance Mode Gateway</span>
    </label>
    <BaseButton type="submit" variant="primary" size="sm">Save Global Config</BaseButton>
  </form>
</template>
<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
const props = defineProps({ settings: Object })
defineEmits(['save'])
const form = ref({ storeName: 'Nexora Commerce', supportEmail: 'ops@nexora.io', orderPrefix: 'NX-2026-', maintenanceMode: false, ...props.settings })
</script>

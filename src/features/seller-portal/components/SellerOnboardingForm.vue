<template>
  <form @submit.prevent="$emit('complete', form)" class="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-5 max-w-2xl mx-auto">
    <div class="text-center space-y-1">
      <h3 class="text-xl font-black text-slate-900 dark:text-white font-display">Merchant Center Onboarding</h3>
      <p class="text-xs text-slate-500">Provide verified corporate details to activate global catalog selling</p>
    </div>
    <BaseInput v-model="form.storeName" label="Store Display Name" placeholder="e.g. AuraTech Acoustics" required />
    <BaseInput v-model="form.legalEntity" label="Registered Legal Business Name" placeholder="e.g. AuraTech Sound Labs LLC" required />
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <BaseInput v-model="form.taxId" label="Federal Tax ID (EIN)" placeholder="XX-XXXXXXX" required />
      <BaseInput v-model="form.supportEmail" label="Escalations Email" type="email" required />
    </div>
    <BaseButton type="submit" variant="primary" size="md" full-width>Submit Verification Dossier</BaseButton>
  </form>
</template>
<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
defineEmits(['complete'])
const form = ref({ storeName: '', legalEntity: '', taxId: '', supportEmail: '' })
</script>

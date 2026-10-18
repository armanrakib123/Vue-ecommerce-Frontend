<template>
  <div class="space-y-2">
    <BaseInput v-model="street" label="Street" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/ui/BaseInput.vue'
const street = ref('')
</script>

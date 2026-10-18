<template>
  <div class="space-y-2">
    <BaseInput v-model="email" label="Contact Email" type="email" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/ui/BaseInput.vue'
const email = ref('')
</script>

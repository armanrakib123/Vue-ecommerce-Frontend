<template>
  <div class="space-y-6">
    <h2 class="text-xl font-bold">Profile Details</h2>
    <UserProfileCard :user="authStore.user" />
  </div>
</template>
<script setup>
import { useAuthStore } from '@/stores/auth.store.js'
import UserProfileCard from '../components/UserProfileCard.vue'
const authStore = useAuthStore()
</script>

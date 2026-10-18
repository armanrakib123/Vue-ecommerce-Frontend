<template>
  <div class="space-y-6 max-w-xl">
    <h2 class="text-xl font-bold">Edit Profile</h2>
    <ProfileForm :initial="authStore.user" @save="onSave" />
  </div>
</template>
<script setup>
import { useAuthStore } from '@/stores/auth.store.js'
import ProfileForm from '../components/ProfileForm.vue'
const authStore = useAuthStore()
function onSave(data) { Object.assign(authStore.user, data) }
</script>

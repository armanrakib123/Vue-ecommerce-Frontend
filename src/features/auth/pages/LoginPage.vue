<template>
  <div class="space-y-6">
    <div class="text-center">
      <h2 class="text-2xl font-black text-slate-900 dark:text-white font-display">Welcome Back</h2>
      <p class="text-xs text-slate-500 mt-1">Sign in to access your orders, portals, and preferences</p>
    </div>
    <LoginForm />
    <p class="text-center text-xs text-slate-500">
      Don't have an account?
      <RouterLink to="/register" class="font-bold text-brand-600 hover:underline">Create one</RouterLink>
    </p>
  </div>
</template>

<script setup>
import LoginForm from '../components/LoginForm.vue'
</script>

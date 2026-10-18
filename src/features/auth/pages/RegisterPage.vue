<template>
  <div class="space-y-6">
    <div class="text-center">
      <h2 class="text-2xl font-black text-slate-900 dark:text-white font-display">Create an Account</h2>
      <p class="text-xs text-slate-500 mt-1">Join the Nexora enterprise commerce ecosystem</p>
    </div>
    <RegisterForm />
    <p class="text-center text-xs text-slate-500">
      Already have an account?
      <RouterLink to="/login" class="font-bold text-brand-600 hover:underline">Sign in</RouterLink>
    </p>
  </div>
</template>

<script setup>
import RegisterForm from '../components/RegisterForm.vue'
</script>

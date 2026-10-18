<template>
  <div class="space-y-6">
    <div class="text-center">
      <h2 class="text-2xl font-black text-slate-900 dark:text-white font-display">Reset Password</h2>
      <p class="text-xs text-slate-500 mt-1">Enter your email to recover your credentials</p>
    </div>
    <ForgotPasswordForm />
    <p class="text-center text-xs text-slate-500">
      Remembered? <RouterLink to="/login" class="font-bold text-brand-600 hover:underline">Back to sign in</RouterLink>
    </p>
  </div>
</template>

<script setup>
import ForgotPasswordForm from '../components/ForgotPasswordForm.vue'
</script>

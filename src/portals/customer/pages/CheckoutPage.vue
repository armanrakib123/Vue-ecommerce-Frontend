<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
    <Breadcrumbs :items="[{ label: 'Cart', to: '/cart' }, { label: 'Checkout' }]" />

    <div class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-black text-slate-900 dark:text-white font-display">
        Secure Checkout
      </h1>
      <p class="text-xs text-slate-500 mt-1">Complete your delivery and billing credentials</p>
    </div>

    <!-- Stepper indicator -->
    <div class="flex items-center justify-center">
      <div class="flex items-center space-x-3 text-xs font-bold">
        <span class="flex items-center gap-1.5 px-3 py-1.5 rounded-full" :class="step >= 1 ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-600'">
          <span>1</span> Shipping
        </span>
        <span class="w-8 h-0.5 bg-slate-200 dark:bg-slate-700"></span>
        <span class="flex items-center gap-1.5 px-3 py-1.5 rounded-full" :class="step >= 2 ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-600'">
          <span>2</span> Delivery
        </span>
        <span class="w-8 h-0.5 bg-slate-200 dark:bg-slate-700"></span>
        <span class="flex items-center gap-1.5 px-3 py-1.5 rounded-full" :class="step >= 3 ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-600'">
          <span>3</span> Payment
        </span>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <!-- Steps Form -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Step 1: Shipping Address -->
        <div v-show="step === 1" class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
          <h3 class="text-base font-bold text-slate-900 dark:text-white">1. Shipping & Contact Information</h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <BaseInput v-model="form.fullName" label="Full Name" placeholder="Sarah Connor" required />
            <BaseInput v-model="form.email" label="Email Address" type="email" placeholder="sarah@example.com" required />
            <BaseInput v-model="form.phone" label="Phone Number" placeholder="+1 (555) 019-2834" required />
            <BaseInput v-model="form.country" label="Country / Region" placeholder="United States" required />
            <div class="sm:col-span-2">
              <BaseInput v-model="form.street" label="Street Address" placeholder="742 Evergreen Terrace" required />
            </div>
            <BaseInput v-model="form.city" label="City" placeholder="San Francisco" required />
            <div class="grid grid-cols-2 gap-2">
              <BaseInput v-model="form.state" label="State / Province" placeholder="CA" required />
              <BaseInput v-model="form.postalCode" label="Postal Code" placeholder="94107" required />
            </div>
          </div>

          <div class="pt-4 flex justify-end">
            <BaseButton variant="primary" @click="step = 2">
              Continue to Delivery Method →
            </BaseButton>
          </div>
        </div>

        <!-- Step 2: Shipping Options -->
        <div v-show="step === 2" class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
          <h3 class="text-base font-bold text-slate-900 dark:text-white">2. Shipping Method</h3>

          <div class="space-y-3">
            <label
              class="flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition"
              :class="cartStore.shippingMethod === 'standard' ? 'border-brand-600 bg-brand-50/40 dark:bg-brand-950/20' : 'border-slate-200 dark:border-slate-800'"
              @click="cartStore.setShippingMethod('standard')"
            >
              <div class="flex items-center gap-3">
                <input type="radio" :checked="cartStore.shippingMethod === 'standard'" class="text-brand-600" />
                <div>
                  <p class="text-xs font-bold text-slate-900 dark:text-white">FedEx Ground / Standard Air</p>
                  <p class="text-[11px] text-slate-400">Estimated delivery: 3-5 business days</p>
                </div>
              </div>
              <span class="text-xs font-bold">{{ cartStore.subtotal > 150 ? 'FREE' : '$9.99' }}</span>
            </label>

            <label
              class="flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition"
              :class="cartStore.shippingMethod === 'express' ? 'border-brand-600 bg-brand-50/40 dark:bg-brand-950/20' : 'border-slate-200 dark:border-slate-800'"
              @click="cartStore.setShippingMethod('express')"
            >
              <div class="flex items-center gap-3">
                <input type="radio" :checked="cartStore.shippingMethod === 'express'" class="text-brand-600" />
                <div>
                  <p class="text-xs font-bold text-slate-900 dark:text-white">DHL Priority Worldwide Express</p>
                  <p class="text-[11px] text-slate-400">Next-day guaranteed delivery with signature confirmation</p>
                </div>
              </div>
              <span class="text-xs font-bold">$18.00</span>
            </label>
          </div>

          <div class="pt-4 flex justify-between">
            <BaseButton variant="secondary" @click="step = 1">← Back</BaseButton>
            <BaseButton variant="primary" @click="step = 3">Continue to Payment →</BaseButton>
          </div>
        </div>

        <!-- Step 3: Payment Section -->
        <div v-show="step === 3" class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
          <h3 class="text-base font-bold text-slate-900 dark:text-white">3. Payment Information</h3>

          <div class="grid grid-cols-3 gap-3">
            <button
              v-for="pm in ['card', 'apple_pay', 'paypal']"
              :key="pm"
              type="button"
              :class="[
                'p-3 rounded-xl border text-xs font-bold capitalize transition-all',
                paymentType === pm
                  ? 'border-brand-600 bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 ring-1 ring-brand-600'
                  : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
              ]"
              @click="paymentType = pm"
            >
              {{ pm.replace('_', ' ') }}
            </button>
          </div>

          <div v-if="paymentType === 'card'" class="space-y-3 pt-2">
            <BaseInput v-model="card.number" label="Card Number" placeholder="4242 •••• •••• 4242" />
            <div class="grid grid-cols-2 gap-3">
              <BaseInput v-model="card.expiry" label="Expiry" placeholder="12/28" />
              <BaseInput v-model="card.cvc" label="Security Code (CVC)" placeholder="889" />
            </div>
            <BaseInput v-model="card.name" label="Cardholder Name" placeholder="Sarah Connor" />
          </div>

          <div v-else class="p-6 text-center rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 text-xs text-slate-500">
            You will be redirected securely to authenticate via {{ paymentType.replace('_', ' ') }}.
          </div>

          <div class="pt-4 flex justify-between">
            <BaseButton variant="secondary" @click="step = 2">← Back</BaseButton>
            <BaseButton variant="primary" size="lg" :loading="isSubmitting" @click="placeOrder">
              Authorize Payment & Confirm ({{ formatCurrency(cartStore.grandTotal) }})
            </BaseButton>
          </div>
        </div>
      </div>

      <!-- Right Summary Panel -->
      <div class="lg:col-span-1">
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4 sticky top-24">
          <h3 class="text-sm font-bold text-slate-900 dark:text-white">Order Summary ({{ cartStore.totalItemsCount }} items)</h3>

          <div class="space-y-3 max-h-60 overflow-y-auto pr-1">
            <div v-for="item in cartStore.items" :key="item.id" class="flex gap-3 text-xs">
              <img :src="item.image" :alt="item.name" class="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
              <div class="flex-1 min-w-0">
                <p class="font-bold text-slate-800 dark:text-slate-200 truncate">{{ item.name }}</p>
                <p class="text-slate-400">Qty: {{ item.quantity }} × {{ formatCurrency(item.price) }}</p>
              </div>
            </div>
          </div>

          <div class="border-t border-slate-100 dark:border-slate-800 pt-3 space-y-2 text-xs text-slate-500">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span class="font-bold text-slate-900 dark:text-slate-100">{{ formatCurrency(cartStore.subtotal) }}</span>
            </div>
            <div v-if="cartStore.discountAmount > 0" class="flex justify-between text-emerald-600 font-semibold">
              <span>Discount</span>
              <span>-{{ formatCurrency(cartStore.discountAmount) }}</span>
            </div>
            <div class="flex justify-between">
              <span>Shipping</span>
              <span class="font-bold text-slate-900 dark:text-slate-100">
                {{ cartStore.shippingCost === 0 ? 'FREE' : formatCurrency(cartStore.shippingCost) }}
              </span>
            </div>
            <div class="flex justify-between">
              <span>Estimated Tax</span>
              <span class="font-bold text-slate-900 dark:text-slate-100">{{ formatCurrency(cartStore.estimatedTax) }}</span>
            </div>
            <div class="flex justify-between text-sm font-extrabold text-slate-900 dark:text-white pt-2 border-t">
              <span>Grand Total</span>
              <span class="text-brand-600 dark:text-brand-400">{{ formatCurrency(cartStore.grandTotal) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart.store.js'
import { useAuthStore } from '@/stores/auth.store.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import { formatCurrency } from '@/utils/format-currency.js'
import apiClient from '@/services/http/client.js'
import Breadcrumbs from '@/components/navigation/Breadcrumbs.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const router = useRouter()
const cartStore = useCartStore()
const authStore = useAuthStore()
const notificationStore = useNotificationStore()

const step = ref(1)
const isSubmitting = ref(false)
const paymentType = ref('card')

const form = ref({
  fullName: authStore.userDisplayName || 'Sarah Connor',
  email: authStore.user?.email || 'sarah.customer@nexora.io',
  phone: '+1 (555) 234-5678',
  country: 'United States',
  street: '742 Evergreen Terrace',
  city: 'San Francisco',
  state: 'CA',
  postalCode: '94107',
})

const card = ref({
  number: '4242 4242 4242 4242',
  expiry: '12/28',
  cvc: '889',
  name: 'Sarah Connor',
})

async function placeOrder() {
  if (cartStore.items.length === 0) {
    notificationStore.error('Your cart is empty!')
    return
  }

  isSubmitting.value = true
  try {
    const payload = {
      customer: {
        id: authStore.user?.id || 'usr_guest',
        name: form.value.fullName,
        email: form.value.email,
      },
      items: cartStore.items,
      subtotal: cartStore.subtotal,
      discountAmount: cartStore.discountAmount,
      shippingFee: cartStore.shippingCost,
      tax: cartStore.estimatedTax,
      total: cartStore.grandTotal,
      shippingAddress: form.value,
      paymentMethod: paymentType.value === 'card' ? 'Credit Card (•••• 4242)' : paymentType.value,
    }

    const res = await apiClient.post('/orders', payload)
    cartStore.clearCart()
    notificationStore.success('Order placed successfully!')
    router.push({ path: '/order-confirmation', query: { orderId: res.data.id } })
  } catch (e) {
    notificationStore.error(e.message || 'Payment processing failed')
  } finally {
    isSubmitting.value = false
  }
}
</script>

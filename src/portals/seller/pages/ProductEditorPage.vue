<template>
  <div class="space-y-6 max-w-4xl">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <RouterLink to="/seller/products" class="text-xs text-brand-600 hover:underline">← Back to Listings</RouterLink>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display mt-1">
          Product Listing Editor
        </h1>
      </div>
      <BaseButton variant="primary" size="sm" @click="saveListing">
        Publish Listing
      </BaseButton>
    </div>

    <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
      <h3 class="text-sm font-bold text-slate-900 dark:text-white">Listing Overview</h3>
      <div class="space-y-3">
        <BaseInput v-model="form.name" label="Product Name" placeholder="Pro Acoustic Wireless Earbuds" required />
        <BaseInput v-model="form.tagline" label="Marketing Tagline" placeholder="Hi-Res Lossless Audio with Active Noise Cancellation" />
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <BaseInput v-model="form.price" label="Price ($)" type="number" placeholder="249.00" required />
          <BaseInput v-model="form.originalPrice" label="MSRP ($)" type="number" placeholder="299.00" />
          <BaseInput v-model="form.stockQuantity" label="Initial Stock" type="number" placeholder="100" required />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <BaseSelect
            v-model="form.category"
            label="Category"
            :options="['electronics', 'apparel', 'home-living', 'accessories']"
          />
          <BaseInput v-model="form.sku" label="SKU Identifier" placeholder="AUR-EAR-01" required />
        </div>
        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">Description</label>
          <textarea
            v-model="form.description"
            rows="4"
            class="w-full text-xs p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-brand-500 outline-none"
            placeholder="Detailed technical specifications and acoustic tuning..."
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useNotificationStore } from '@/stores/notification.store.js'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const router = useRouter()
const notificationStore = useNotificationStore()

const form = ref({
  name: 'Lumina Sound Pro ANC Wireless Headphones',
  tagline: 'Studio Acoustic Precision with 45dB Hybrid Active Noise Cancellation',
  price: 349.00,
  originalPrice: 399.00,
  stockQuantity: 84,
  category: 'electronics',
  sku: 'LUM-ANC-01',
  description: 'Designed for audiophiles and digital creators, Lumina Sound Pro delivers unmatched high-fidelity sound.'
})

function saveListing() {
  notificationStore.success('Product listing published and propagated to global catalog cache!')
  router.push('/seller/products')
}
</script>

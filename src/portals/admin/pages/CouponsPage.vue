<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Coupons & Promo Codes</h1>
        <p class="text-xs text-slate-500">Configure promotional vouchers, cart discount rules, and redemption caps</p>
      </div>
      <BaseButton variant="primary" size="sm" @click="showModal = true">
        + Create Promo Code
      </BaseButton>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="c in coupons"
        :key="c.code"
        class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between"
      >
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="font-mono text-base font-black text-brand-600 bg-brand-50 dark:bg-brand-950/60 px-3 py-1 rounded-xl border border-brand-200/60">
              {{ c.code }}
            </span>
            <StatusBadge :status="c.isActive ? 'active' : 'cancelled'" />
          </div>
          <p class="text-xs font-bold text-slate-900 dark:text-white mt-3">{{ c.description }}</p>
          <p class="text-[11px] text-slate-400 mt-1">Min purchase: {{ formatCurrency(c.minOrderValue) }} • Valid until {{ c.validUntil }}</p>
        </div>

        <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs">
          <span class="font-bold text-emerald-600">
            {{ c.type === 'percentage' ? `${c.discount}% OFF` : c.type === 'free_shipping' ? 'FREE EXPRESS' : `$${c.discount} OFF` }}
          </span>
          <button class="text-rose-500 font-semibold hover:underline" @click="toggleStatus(c)">
            {{ c.isActive ? 'Deactivate' : 'Activate' }}
          </button>
        </div>
      </div>
    </div>

    <BaseModal :is-open="showModal" title="New Promotion Coupon" @close="showModal = false">
      <div class="space-y-3">
        <BaseInput v-model="newCoupon.code" label="Coupon Code" placeholder="BLACKFRIDAY30" required />
        <BaseInput v-model="newCoupon.description" label="Marketing Summary" placeholder="30% discount on orders over $150" required />
        <div class="grid grid-cols-2 gap-2">
          <BaseInput v-model="newCoupon.discount" label="Discount Value" type="number" placeholder="30" required />
          <BaseInput v-model="newCoupon.minOrderValue" label="Min Spend ($)" type="number" placeholder="150" required />
        </div>
      </div>
      <template #footer>
        <BaseButton variant="secondary" @click="showModal = false">Cancel</BaseButton>
        <BaseButton variant="primary" @click="addCoupon">Save & Enable</BaseButton>
      </template>
    </BaseModal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { mockCoupons } from '@/mocks/fixtures/coupons.json.js'
import { formatCurrency } from '@/utils/format-currency.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import StatusBadge from '@/components/data-display/StatusBadge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseModal from '@/components/ui/BaseModal.vue'
import BaseInput from '@/components/ui/BaseInput.vue'

const notificationStore = useNotificationStore()
const coupons = ref([...mockCoupons])
const showModal = ref(false)

const newCoupon = ref({
  code: '',
  description: '',
  discount: 25,
  minOrderValue: 120,
  type: 'percentage',
  validUntil: '2026-12-31'
})

function toggleStatus(c) {
  c.isActive = !c.isActive
  notificationStore.info(`Coupon ${c.code} status changed to ${c.isActive ? 'Active' : 'Inactive'}`)
}

function addCoupon() {
  if (!newCoupon.value.code) return
  coupons.value.push({
    ...newCoupon.value,
    code: newCoupon.value.code.toUpperCase(),
    isActive: true
  })
  showModal.value = false
  notificationStore.success(`Coupon ${newCoupon.value.code} published!`)
}
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h2 class="text-xl font-black text-slate-900 dark:text-white font-display">Saved Addresses</h2>
        <p class="text-xs text-slate-500">Manage destination addresses for 1-click checkout</p>
      </div>
      <BaseButton variant="primary" size="sm" @click="showAddModal = true">
        + Add New Address
      </BaseButton>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="addr in addresses"
        :key="addr.id"
        class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm relative flex flex-col justify-between"
      >
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold uppercase tracking-wider text-brand-600">{{ addr.label }}</span>
            <span v-if="addr.isDefault" class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200">
              Default Delivery
            </span>
          </div>
          <p class="text-xs font-bold text-slate-900 dark:text-white">{{ addr.fullName }}</p>
          <p class="text-xs text-slate-500 mt-1">{{ addr.street }}</p>
          <p class="text-xs text-slate-500">{{ addr.city }}, {{ addr.state }} {{ addr.postalCode }}</p>
          <p class="text-xs text-slate-500">{{ addr.country }}</p>
          <p class="text-xs text-slate-400 mt-2">Phone: {{ addr.phone }}</p>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs">
          <button
            v-if="!addr.isDefault"
            class="text-brand-600 font-semibold hover:underline"
            @click="setDefault(addr.id)"
          >
            Set as Default
          </button>
          <span v-else class="text-slate-400">Primary</span>
          <button class="text-rose-500 hover:underline" @click="removeAddress(addr.id)">Delete</button>
        </div>
      </div>
    </div>

    <!-- Add Modal -->
    <BaseModal :is-open="showAddModal" title="Add New Address" @close="showAddModal = false">
      <div class="space-y-3">
        <BaseInput v-model="newAddr.label" label="Address Label" placeholder="Home, Studio, Office" required />
        <BaseInput v-model="newAddr.fullName" label="Full Name" placeholder="Sarah Connor" required />
        <BaseInput v-model="newAddr.street" label="Street Address" placeholder="1044 Market Street, Apt 12B" required />
        <div class="grid grid-cols-2 gap-2">
          <BaseInput v-model="newAddr.city" label="City" placeholder="San Francisco" required />
          <BaseInput v-model="newAddr.state" label="State" placeholder="CA" required />
        </div>
        <div class="grid grid-cols-2 gap-2">
          <BaseInput v-model="newAddr.postalCode" label="Postal Code" placeholder="94103" required />
          <BaseInput v-model="newAddr.phone" label="Phone" placeholder="+1 (555) 000-0000" required />
        </div>
      </div>
      <template #footer>
        <BaseButton variant="secondary" @click="showAddModal = false">Cancel</BaseButton>
        <BaseButton variant="primary" @click="saveNewAddress">Save Address</BaseButton>
      </template>
    </BaseModal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNotificationStore } from '@/stores/notification.store.js'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseModal from '@/components/ui/BaseModal.vue'
import BaseInput from '@/components/ui/BaseInput.vue'

const notificationStore = useNotificationStore()
const showAddModal = ref(false)

const addresses = ref([
  {
    id: 'addr_1',
    label: 'Primary Residence',
    fullName: 'Sarah Connor',
    street: '742 Evergreen Terrace',
    city: 'San Francisco',
    state: 'CA',
    postalCode: '94107',
    country: 'United States',
    phone: '+1 (555) 234-5678',
    isDefault: true,
  },
  {
    id: 'addr_2',
    label: 'Creative Studio',
    fullName: 'Sarah Connor',
    street: '500 Howard Street, Suite 400',
    city: 'San Francisco',
    state: 'CA',
    postalCode: '94105',
    country: 'United States',
    phone: '+1 (555) 234-5678',
    isDefault: false,
  }
])

const newAddr = ref({
  label: 'Office',
  fullName: 'Sarah Connor',
  street: '',
  city: '',
  state: '',
  postalCode: '',
  country: 'United States',
  phone: '',
})

function setDefault(id) {
  addresses.value.forEach(a => {
    a.isDefault = a.id === id
  })
  notificationStore.success('Default delivery address updated')
}

function removeAddress(id) {
  addresses.value = addresses.value.filter(a => a.id !== id)
  notificationStore.info('Address removed')
}

function saveNewAddress() {
  if (!newAddr.value.street || !newAddr.value.city) {
    notificationStore.error('Please complete the address form')
    return
  }
  addresses.value.push({
    id: `addr_${Date.now()}`,
    ...newAddr.value,
    isDefault: false,
  })
  showAddModal.value = false
  notificationStore.success('New address added')
}
</script>

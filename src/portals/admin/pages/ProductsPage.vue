<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Product Catalog Management</h1>
        <p class="text-xs text-slate-500">Global product listings, pricing rules, and inventory thresholds</p>
      </div>
      <BaseButton variant="primary" size="sm" @click="showModal = true">
        + Create New Product
      </BaseButton>
    </div>

    <DataTable
      :columns="columns"
      :rows="filteredProducts"
      :show-search="true"
      search-placeholder="Search by SKU, product name, or brand..."
      v-model:search-query="search"
    >
      <template #product="{ row }">
        <div class="flex items-center gap-3">
          <img :src="row.thumbnail" class="w-10 h-10 rounded-xl object-cover bg-slate-100 flex-shrink-0" />
          <div class="min-w-0">
            <p class="text-xs font-bold text-slate-900 dark:text-white truncate">{{ row.name }}</p>
            <p class="text-[11px] text-slate-400 font-mono">SKU: {{ row.sku }}</p>
          </div>
        </div>
      </template>

      <template #price="{ row }">
        <span class="text-xs font-bold">{{ formatCurrency(row.price) }}</span>
      </template>

      <template #stock="{ row }">
        <span
          :class="[
            'text-xs font-semibold px-2 py-0.5 rounded-full',
            row.stockQuantity > 10 ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700 font-bold'
          ]"
        >
          {{ row.stockQuantity }} units
        </span>
      </template>

      <template #actions="{ row }">
        <div class="flex items-center justify-end gap-2">
          <RouterLink :to="`/products/${row.slug}`" class="text-xs font-bold text-brand-600 hover:underline">
            View
          </RouterLink>
          <button class="text-xs font-bold text-rose-600 hover:underline" @click="deleteProduct(row.id)">
            Delete
          </button>
        </div>
      </template>
    </DataTable>

    <BaseModal :is-open="showModal" title="Add Catalog Product" @close="showModal = false">
      <div class="space-y-3">
        <BaseInput v-model="form.name" label="Product Title" placeholder="Aero Pro Wireless Headphones" required />
        <BaseInput v-model="form.brand" label="Brand / Manufacturer" placeholder="AuraTech Sound" required />
        <div class="grid grid-cols-2 gap-2">
          <BaseInput v-model="form.price" label="Retail Price ($)" type="number" placeholder="299.00" required />
          <BaseInput v-model="form.stockQuantity" label="Initial Stock" type="number" placeholder="50" required />
        </div>
        <BaseSelect
          v-model="form.category"
          label="Category"
          :options="[
            { label: 'Electronics & Gadgets', value: 'electronics' },
            { label: 'Apparel & Footwear', value: 'apparel' },
            { label: 'Modern Home & Workspace', value: 'home-living' },
            { label: 'Luxury Travel & EDC', value: 'accessories' }
          ]"
        />
        <BaseInput v-model="form.sku" label="Stock Keeping Unit (SKU)" placeholder="AUR-HP-01" required />
      </div>
      <template #footer>
        <BaseButton variant="secondary" @click="showModal = false">Cancel</BaseButton>
        <BaseButton variant="primary" @click="saveProduct">Publish to Catalog</BaseButton>
      </template>
    </BaseModal>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { mockProducts } from '@/mocks/fixtures/products.json.js'
import { formatCurrency } from '@/utils/format-currency.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import DataTable from '@/components/data-display/DataTable.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseModal from '@/components/ui/BaseModal.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'

const notificationStore = useNotificationStore()
const search = ref('')
const showModal = ref(false)
const products = ref([...mockProducts])

const columns = [
  { key: 'product', label: 'Item & SKU' },
  { key: 'categoryName', label: 'Category' },
  { key: 'price', label: 'Price' },
  { key: 'stock', label: 'Stock Level' },
  { key: 'actions', label: 'Actions', align: 'right' }
]

const form = ref({
  name: '',
  brand: 'AuraTech Sound',
  price: 199.00,
  stockQuantity: 40,
  category: 'electronics',
  sku: 'NX-SKU-90'
})

const filteredProducts = computed(() => {
  if (!search.value.trim()) return products.value
  const q = search.value.toLowerCase()
  return products.value.filter(p => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q))
})

function saveProduct() {
  if (!form.value.name) return
  products.value.unshift({
    id: `prod_${Date.now()}`,
    slug: form.value.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name: form.value.name,
    brand: form.value.brand,
    price: Number(form.value.price),
    stockQuantity: Number(form.value.stockQuantity),
    category: form.value.category,
    categoryName: form.value.category.toUpperCase(),
    sku: form.value.sku,
    rating: 5.0,
    reviewsCount: 0,
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800'
  })
  showModal.value = false
  notificationStore.success(`Product "${form.value.name}" published to catalog!`)
}

function deleteProduct(id) {
  products.value = products.value.filter(p => p.id !== id)
  notificationStore.info('Product removed from catalog')
}
</script>

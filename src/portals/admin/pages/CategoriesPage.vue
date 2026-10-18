<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Category Hierarchy</h1>
        <p class="text-xs text-slate-500">Taxonomy, navigation metadata, and collection banners</p>
      </div>
      <BaseButton variant="primary" size="sm" @click="showModal = true">
        + Create Category
      </BaseButton>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="cat in categories"
        :key="cat.slug"
        class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm flex flex-col justify-between"
      >
        <div class="h-36 overflow-hidden relative">
          <img :src="cat.image" :alt="cat.name" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
          <div class="absolute bottom-3 left-4 right-4 text-white">
            <span class="text-[10px] uppercase font-bold text-brand-300">{{ cat.slug }}</span>
            <h3 class="text-sm font-bold truncate">{{ cat.name }}</h3>
          </div>
        </div>

        <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
          <p class="text-xs text-slate-500 line-clamp-2">{{ cat.description }}</p>
          <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
            <span class="font-bold text-brand-600">{{ cat.productCount }} Products</span>
            <RouterLink :to="`/categories/${cat.slug}`" class="text-slate-500 hover:text-brand-600 font-semibold">
              Preview →
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <BaseModal :is-open="showModal" title="New Category" @close="showModal = false">
      <div class="space-y-3">
        <BaseInput v-model="newCat.name" label="Category Title" placeholder="Gaming Hardware" required />
        <BaseInput v-model="newCat.slug" label="Slug identifier" placeholder="gaming-hardware" required />
        <BaseInput v-model="newCat.description" label="Description" placeholder="Next-gen peripherals and monitors" />
      </div>
      <template #footer>
        <BaseButton variant="secondary" @click="showModal = false">Cancel</BaseButton>
        <BaseButton variant="primary" @click="createCategory">Save Category</BaseButton>
      </template>
    </BaseModal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { mockCategories } from '@/mocks/fixtures/categories.json.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseModal from '@/components/ui/BaseModal.vue'
import BaseInput from '@/components/ui/BaseInput.vue'

const notificationStore = useNotificationStore()
const categories = ref([...mockCategories])
const showModal = ref(false)

const newCat = ref({
  name: '',
  slug: '',
  description: ''
})

function createCategory() {
  if (!newCat.value.name) return
  categories.value.push({
    id: `cat_${Date.now()}`,
    name: newCat.value.name,
    slug: newCat.value.slug || newCat.value.name.toLowerCase().replace(/\s+/g, '-'),
    description: newCat.value.description,
    productCount: 0,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600'
  })
  showModal.value = false
  notificationStore.success(`Created category "${newCat.value.name}"`)
}
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">User & Staff Management</h1>
        <p class="text-xs text-slate-500">Configure global roles, accounts, and identity provisioning</p>
      </div>
      <BaseButton variant="primary" size="sm" @click="showAddUser = true">
        + Invite User / Staff
      </BaseButton>
    </div>

    <DataTable
      :columns="columns"
      :rows="usersList"
      :show-search="true"
      search-placeholder="Search by name, email, or role..."
      v-model:search-query="search"
    >
      <template #name="{ row }">
        <div class="flex items-center gap-3">
          <img :src="row.avatar" class="w-8 h-8 rounded-full object-cover" />
          <div>
            <p class="text-xs font-bold text-slate-900 dark:text-white">{{ row.name }}</p>
            <p class="text-[11px] text-slate-400">{{ row.email }}</p>
          </div>
        </div>
      </template>

      <template #role="{ row }">
        <span class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300">
          {{ row.role }}
        </span>
      </template>

      <template #actions="{ row }">
        <button class="text-xs font-bold text-brand-600 hover:underline" @click="editUserRole(row)">
          Edit Permissions
        </button>
      </template>
    </DataTable>

    <BaseModal :is-open="showAddUser" title="Invite User or Staff" @close="showAddUser = false">
      <div class="space-y-3">
        <BaseInput v-model="newUser.name" label="Full Name" placeholder="Jane Doe" required />
        <BaseInput v-model="newUser.email" label="Work Email" placeholder="jane@nexora.io" required />
        <BaseSelect
          v-model="newUser.role"
          label="Assigned Role"
          :options="roleOptions"
        />
      </div>
      <template #footer>
        <BaseButton variant="secondary" @click="showAddUser = false">Cancel</BaseButton>
        <BaseButton variant="primary" @click="createUser">Send Invitation</BaseButton>
      </template>
    </BaseModal>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { mockUsers } from '@/mocks/fixtures/users.json.js'
import { ROLES } from '@/permissions/roles.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import DataTable from '@/components/data-display/DataTable.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseModal from '@/components/ui/BaseModal.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'

const notificationStore = useNotificationStore()
const search = ref('')
const showAddUser = ref(false)
const users = ref([...mockUsers])

const roleOptions = Object.values(ROLES).map(r => ({ label: r.toUpperCase(), value: r }))

const columns = [
  { key: 'name', label: 'User & Email' },
  { key: 'role', label: 'Role' },
  { key: 'actions', label: 'Management', align: 'right' }
]

const newUser = ref({
  name: '',
  email: '',
  role: ROLES.SUPPORT_AGENT
})

const usersList = computed(() => {
  if (!search.value.trim()) return users.value
  const q = search.value.toLowerCase()
  return users.value.filter(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.role.includes(q))
})

function editUserRole(row) {
  notificationStore.info(`Opened permission matrix editor for ${row.name}`)
}

function createUser() {
  if (!newUser.value.email || !newUser.value.name) return
  users.value.push({
    id: `usr_${Date.now()}`,
    name: newUser.value.name,
    email: newUser.value.email,
    role: newUser.value.role,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
  })
  showAddUser.value = false
  notificationStore.success(`Invited ${newUser.value.email} as ${newUser.value.role}`)
}
</script>

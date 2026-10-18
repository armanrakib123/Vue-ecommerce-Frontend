import { ROLES } from '@/permissions/roles.js'

export function createMockUser(overrides = {}) {
  return {
    id: 'usr_mock_001',
    name: 'Sarah Connor',
    email: 'sarah.connor@cyberdyne.io',
    role: ROLES.CUSTOMER,
    tier: 'Platinum Obsidian',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    ...overrides
  }
}

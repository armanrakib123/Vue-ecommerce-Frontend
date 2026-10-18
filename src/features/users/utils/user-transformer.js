export function formatUserDisplayName(user) {
  return user?.name || user?.fullName || 'Anonymous User'
}

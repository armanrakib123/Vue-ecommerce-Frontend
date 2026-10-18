export function cleanSearchQuery(q) {
  return q.trim().replace(/[^a-zA-Z0-9 ]/g, '')
}

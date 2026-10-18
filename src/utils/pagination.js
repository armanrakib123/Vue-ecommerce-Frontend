export function paginate(items, page = 1, pageSize = 10) {
  const total = items.length
  const totalPages = Math.ceil(total / pageSize) || 1
  const currentPage = Math.max(1, Math.min(page, totalPages))
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = Math.min(startIndex + pageSize, total)

  return {
    data: items.slice(startIndex, endIndex),
    pagination: {
      currentPage,
      pageSize,
      total,
      totalPages,
      hasNext: currentPage < totalPages,
      hasPrev: currentPage > 1,
    }
  }
}

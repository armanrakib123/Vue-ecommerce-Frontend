export class AppError extends Error {
  constructor(message, code = 'APP_ERROR', status = 400, details = null) {
    super(message)
    this.name = 'AppError'
    this.code = code
    this.status = status
    this.details = details
  }
}

export function normalizeError(error) {
  if (error instanceof AppError) {
    return error
  }
  if (error?.response?.data) {
    const data = error.response.data
    return new AppError(
      data.message || 'Server returned an error',
      data.code || 'API_ERROR',
      error.response.status,
      data.details || null
    )
  }
  return new AppError(error?.message || 'An unexpected error occurred', 'UNKNOWN_ERROR', 500)
}

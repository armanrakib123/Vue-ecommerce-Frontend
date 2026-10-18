export class ApiError extends Error {
  constructor(message, status = 500, code = 'API_ERROR', details = null) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.code = code
    this.details = details
  }

  static fromAxiosError(error) {
    if (error.response) {
      const data = error.response.data || {}
      return new ApiError(
        data.message || error.message || 'API request failed',
        error.response.status,
        data.code || 'HTTP_ERROR',
        data.errors || data.details || null
      )
    }
    if (error.request) {
      return new ApiError('Network error: unable to reach server', 0, 'NETWORK_ERROR')
    }
    return new ApiError(error.message || 'Unknown request error', 500, 'REQUEST_SETUP_ERROR')
  }
}

export class RequestCancelManager {
  constructor() {
    this.pendingRequests = new Map()
  }

  add(key, abortController) {
    this.cancel(key)
    this.pendingRequests.set(key, abortController)
  }

  remove(key) {
    this.pendingRequests.delete(key)
  }

  cancel(key, message = 'Request canceled by user or superseding action') {
    if (this.pendingRequests.has(key)) {
      const controller = this.pendingRequests.get(key)
      controller.abort(message)
      this.pendingRequests.delete(key)
    }
  }

  cancelAll() {
    for (const [key, controller] of this.pendingRequests.entries()) {
      controller.abort('All requests cancelled')
    }
    this.pendingRequests.clear()
  }
}

export const requestCancelManager = new RequestCancelManager()

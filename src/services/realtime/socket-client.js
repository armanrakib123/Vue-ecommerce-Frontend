export class RealtimeClient {
  constructor() {
    this.listeners = new Map()
    this.isConnected = false
  }

  connect() {
    this.isConnected = true
    return this
  }

  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set())
    }
    this.listeners.get(event).add(callback)
    return () => this.off(event, callback)
  }

  off(event, callback) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).delete(callback)
    }
  }

  emit(event, data) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(cb => cb(data))
    }
  }

  disconnect() {
    this.isConnected = false
    this.listeners.clear()
  }
}

export const realtimeClient = new RealtimeClient()

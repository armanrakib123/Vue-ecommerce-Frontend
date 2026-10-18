import { createPinia } from 'pinia'

export const pinia = createPinia()

export default {
  install(app) {
    app.use(pinia)
  }
}

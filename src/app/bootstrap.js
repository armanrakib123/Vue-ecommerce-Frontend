import { createApp } from 'vue'
import App from './App.vue'
import piniaPlugin from './plugins/pinia.js'
import routerPlugin from './plugins/router.js'
import i18nPlugin from './plugins/i18n.js'
import uiPlugin from './plugins/ui.js'
import { realtimeClient } from '@/services/realtime/socket-client.js'

export async function bootstrapApp() {
  const app = createApp(App)

  // Register Core Architecture Plugins in sequence
  app.use(piniaPlugin)
  app.use(routerPlugin)
  app.use(i18nPlugin)
  app.use(uiPlugin)

  // Configure Global Vue Error Boundary
  app.config.errorHandler = (err, instance, info) => {
    console.error('[Nexora Global Error Handler]:', err, info)
  }

  // Connect mock realtime event bus
  realtimeClient.connect()

  return { app }
}

export default bootstrapApp

import '@/assets/styles/main.css'
import { bootstrapApp } from './bootstrap.js'

async function init() {
  const { app } = await bootstrapApp()
  app.mount('#app')
}

init()

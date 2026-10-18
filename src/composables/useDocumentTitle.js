import { watchEffect } from 'vue'
import { appConfig } from '@/config/app.config.js'

export function useDocumentTitle(titleRef) {
  watchEffect(() => {
    const titleVal = typeof titleRef === 'function' ? titleRef() : titleRef.value || titleRef
    if (titleVal) {
      document.title = `${titleVal} | ${appConfig.name}`
    } else {
      document.title = appConfig.name
    }
  })
}

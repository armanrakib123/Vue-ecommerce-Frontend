import clickOutsideDirective from '@/directives/click-outside.js'
import permissionDirective from '@/directives/permission.js'

export default {
  install(app) {
    app.directive('click-outside', clickOutsideDirective)
    app.directive('permission', permissionDirective)
  }
}

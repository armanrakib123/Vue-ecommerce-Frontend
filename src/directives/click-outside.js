export const clickOutsideDirective = {
  mounted(el, binding) {
    el._clickOutsideHandler = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event)
      }
    }
    document.addEventListener('pointerdown', el._clickOutsideHandler)
  },
  unmounted(el) {
    if (el._clickOutsideHandler) {
      document.removeEventListener('pointerdown', el._clickOutsideHandler)
      delete el._clickOutsideHandler
    }
  }
}

export default clickOutsideDirective

import './style.css'

console.log('Shopify Theme with Vite + Tailwind loaded!')

class Theme {
  constructor() {
    this.init()
  }

  init() {}
}

document.addEventListener('DOMContentLoaded', () => {
  new Theme()
})

window.Theme = Theme

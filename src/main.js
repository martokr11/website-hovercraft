import './assets/main.css'
import { createApp } from 'vue'
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Assumes your root component is App.vue
// and placed in the same folder as main.js
import App from './App.vue'

const myApp = createApp(App)

myApp.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})
  
myApp.mount('#app')

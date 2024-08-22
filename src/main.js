/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import router from './router'
// Components
import App from './App.vue'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
// Composables
import { createApp } from 'vue'
// import '@/styles/main.scss'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

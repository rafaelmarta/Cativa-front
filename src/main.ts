/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import './styles/settings.scss'
import Toast from 'vue-toastification';
import "vue-toastification/dist/index.css";

const app = createApp(App)

registerPlugins(app)

app.use(Toast)

app.mount('#app')

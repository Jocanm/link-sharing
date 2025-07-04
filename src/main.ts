import { VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue'
import Toast, { type PluginOptions } from "vue-toastification"
import "vue-toastification/dist/index.css"
import App from './App.vue'
import { router } from './router/index'
import './style.css'

const app = createApp(App)

app.use(VueQueryPlugin)
app.use(router)
app.use(Toast, {} as PluginOptions)

app.mount('#app')

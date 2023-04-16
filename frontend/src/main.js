import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import { createPinia } from 'pinia'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
        mdi,
        }
    }
})

const pinia = createPinia()

createApp(App)
.use(vuetify)
.use(pinia)
.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

/** Setup Theme */
import PinkCupcake from '@userfrosting/theme-pinkcupcake'
app.use(PinkCupcake)

/** Setup Router */
import router from './router'
app.use(router)

app.mount('#app')

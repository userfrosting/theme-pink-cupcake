/** Create app with Main layout */
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

/** Setup Theme */
import '@userfrosting/theme-pinkcupcake/style.less'
import PinkCupcake from '@userfrosting/theme-pinkcupcake'
app.use(PinkCupcake)

/** Setup Router */
import router from './router'
app.use(router)

app.mount('#app')

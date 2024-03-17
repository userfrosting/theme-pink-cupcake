import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

/** Setup Theme */
import PinkCupcake from '@userfrosting/theme-pinkcupcake'
app.use(PinkCupcake)

/* Import CSS */
import '@userfrosting/theme-pinkcupcake/style.less'

/** Setup Router */
import router from './router'
app.use(router)

app.mount('#app')

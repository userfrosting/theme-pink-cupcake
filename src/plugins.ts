import type { App } from 'vue';

// Import sub-plugins
import PinkCupcakeComponents from './components'
import FontAwesome from './plugins/font-awesome'

// Init UIkit
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
UIkit.use(Icons)

// Import custom fonts
import '@fontsource/montserrat'
import '@fontsource/montserrat/700.css'

/* Install plugins */
export default {
    install: (app: App) => {
        app.use(PinkCupcakeComponents)
        app.use(FontAwesome)
    }
}

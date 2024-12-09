import type { App } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    FontAwesomeIcon,
    FontAwesomeLayers,
    FontAwesomeLayersText
} from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

export default {
    install: (app: App) => {
        library.add(fas, fab, far)
        app.component('font-awesome-icon', FontAwesomeIcon)
            .component('font-awesome-layers', FontAwesomeLayers)
            .component('font-awesome-layers-text', FontAwesomeLayersText)
    }
}

import FontAwesome from './plugins/font-awesome'
// import Pinia from './plugins/pinia'

/* Install plugins */
export default {
    install: (app) => {
        app.use(FontAwesome)
        // app.use(Pinia)
    }
}

// Init UIkit
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
UIkit.use(Icons)

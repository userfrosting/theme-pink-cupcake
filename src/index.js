import FontAwesome from './plugins/font-awesome'
// import Pinia from './plugins/pinia'

/* Import CSS */
import './less/uf-theme.less'

/* Install plugins */
export default {
    install: (app) => {
        app.use(FontAwesome)
        // app.use(Pinia)
    }
}

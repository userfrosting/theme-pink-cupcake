import FontAwesome from './plugins/font-awesome'
// import Pinia from './plugins/pinia'

/* Install plugins */
export default {
    install: (app) => {
        app.use(FontAwesome)
        // app.use(Pinia)
    }
}

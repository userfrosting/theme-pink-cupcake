/**
 * Automatically register every
 * @see
 *  - https://vuejs.org/guide/components/registration
 *  - https://dev.to/jirehnimes/how-to-register-global-components-in-vue-3-dynamically-in-2023-1d50
 *
 * TODO : Test out a way to improve tree shaking
 */
const importComponents = import.meta.glob('../components/**/*.vue')

export const registerComponents = (app, prefix = 'UF') => {
    for (const fileName of Object.keys(importComponents)) {
        importComponents[fileName]().then((componentConfig) => {
            const componentName =
                prefix +
                fileName
                    .split('/')
                    .pop()
                    ?.replace(/\.\w+$/, '')

            app.component(componentName, componentConfig?.default)
        })
    }
}

/**
 * Automatically register every component globally
 * @see
 *  - https://vuejs.org/guide/components/registration
 *  - https://dev.to/jirehnimes/how-to-register-global-components-in-vue-3-dynamically-in-2023-1d50
 *
 * TODO : Test out a way to improve tree shaking
 */
// TODO : Glob doesn't work with webpack
// "Critical dependency: Accessing import.meta directly is unsupported (only property access or destructuring is supported)"
// const importComponents = import.meta.glob('../components/**/*.vue')

/*export const registerComponents = (app, prefix = 'UF') => {
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
}*/

import AppLink from './Content/AppLink.vue'
import MainContent from './Content/MainContent.vue'
import NavBar from './NavBar/NavBar.vue'
import NavBarDropdown from './NavBar/NavBarDropdown.vue'
import NavBarDropdownSeparator from './NavBar/NavBarDropdownSeparator.vue'
import NavBarItem from './NavBar/NavBarItem.vue'
import NavBarUserCard from './NavBar/NavBarUserCard.vue'
import NavBarUserCardButton from './NavBar/NavBarUserCardButton.vue'
import SideBar from './SideBar/SideBar.vue'
import SideBarDropdown from './SideBar/SideBarDropdown.vue'
import SideBarItem from './SideBar/SideBarItem.vue'
import SideBarLabel from './SideBar/SideBarLabel.vue'

export {
    AppLink,
    MainContent,
    NavBar,
    NavBarDropdown,
    NavBarDropdownSeparator,
    NavBarItem,
    NavBarUserCard,
    NavBarUserCardButton,
    SideBar,
    SideBarDropdown,
    SideBarItem,
    SideBarLabel
}

export const registerComponents = (app, prefix = 'UF') => {
    app.component(prefix + 'UFAppLink', AppLink)
        .component(prefix + 'MainContent', MainContent)
        .component(prefix + 'NavBar', NavBar)
        .component(prefix + 'NavBarDropdown', NavBarDropdown)
        .component(prefix + 'NavBarDropdownSeparator', NavBarDropdownSeparator)
        .component(prefix + 'NavBarItem', NavBarItem)
        .component(prefix + 'NavBarUserCard', NavBarUserCard)
        .component(prefix + 'NavBarUserCardButton', NavBarUserCardButton)
        .component(prefix + 'SideBar', SideBar)
        .component(prefix + 'SideBarDropdown', SideBarDropdown)
        .component(prefix + 'SideBarItem', SideBarItem)
        .component(prefix + 'SideBarLabel', SideBarLabel)
}

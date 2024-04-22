/**
 * Register every component globally
 * See : https://vuejs.org/guide/components/registration
 */
import type { App } from 'vue';

import AlertContainer from './components/AlertContainer.vue'
import AppLink from './components/Content/AppLink.vue'
import MainContent from './components/Content/MainContent.vue'
import NavBar from './components/NavBar/NavBar.vue'
import NavBarDropdown from './components/NavBar/NavBarDropdown.vue'
import NavBarDropdownSeparator from './components/NavBar/NavBarDropdownSeparator.vue'
import NavBarItem from './components/NavBar/NavBarItem.vue'
import NavBarUserCard from './components/NavBar/NavBarUserCard.vue'
import NavBarUserCardButton from './components/NavBar/NavBarUserCardButton.vue'
import SideBar from './components/SideBar/SideBar.vue'
import SideBarDropdown from './components/SideBar/SideBarDropdown.vue'
import SideBarItem from './components/SideBar/SideBarItem.vue'
import SideBarLabel from './components/SideBar/SideBarLabel.vue'

export {
    AlertContainer,
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

export default {
    install: (app: App, options?: { prefix: string; }) => {
        const prefix = options && options.prefix ? options.prefix : 'UF'
        app.component(prefix + 'AlertContainer', AlertContainer)
            .component(prefix + 'AppLink', AppLink)
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
}

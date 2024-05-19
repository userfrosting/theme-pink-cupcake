/**
 * Register every component globally
 * See : https://vuejs.org/guide/components/registration
 */
import type { App } from 'vue'

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
    install: (app: App) => {
        app.component('UFAlertContainer', AlertContainer)
            .component('UFAppLink', AppLink)
            .component('UFMainContent', MainContent)
            .component('UFNavBar', NavBar)
            .component('UFNavBarDropdown', NavBarDropdown)
            .component('UFNavBarDropdownSeparator', NavBarDropdownSeparator)
            .component('UFNavBarItem', NavBarItem)
            .component('UFNavBarUserCard', NavBarUserCard)
            .component('UFNavBarUserCardButton', NavBarUserCardButton)
            .component('UFSideBar', SideBar)
            .component('UFSideBarDropdown', SideBarDropdown)
            .component('UFSideBarItem', SideBarItem)
            .component('UFSideBarLabel', SideBarLabel)
    }
}

declare module 'vue' {
    export interface GlobalComponents {
        'UFAlertContainer': typeof AlertContainer,
        'AppLink': typeof AppLink,
        'MainContent': typeof MainContent,
        'NavBar': typeof NavBar,
        'NavBarDropdown': typeof NavBarDropdown,
        'NavBarDropdownSeparator': typeof NavBarDropdownSeparator,
        'NavBarItem': typeof NavBarItem,
        'NavBarUserCard': typeof NavBarUserCard,
        'NavBarUserCardButton': typeof NavBarUserCardButton,
        'SideBar': typeof SideBar,
        'SideBarDropdown': typeof SideBarDropdown,
        'SideBarItem': typeof SideBarItem,
        'SideBarLabel': typeof SideBarLabel,
    }
}

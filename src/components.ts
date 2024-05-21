/**
 * Register every component globally
 * See : https://vuejs.org/guide/components/registration
 */
import type { App } from 'vue'

import AlertContainer from './components/AlertContainer.vue'
import AppLink from './components/Content/AppLink.vue'
import CardBox from './components/Content/CardBox.vue'
import MainContent from './components/Content/MainContent.vue'
import FooterContent from './components/Content/FooterContent.vue'
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
    CardBox,
    MainContent,
    FooterContent,
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
            .component('UFCardBox', CardBox)
            .component('UFMainContent', MainContent)
            .component('UFFooterContent', FooterContent)
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
        UFAlertContainer: typeof AlertContainer
        UFAppLink: typeof AppLink
        UFCardBox: typeof CardBox
        UFMainContent: typeof MainContent
        UFFooterContent: typeof FooterContent
        UFNavBar: typeof NavBar
        UFNavBarDropdown: typeof NavBarDropdown
        UFNavBarDropdownSeparator: typeof NavBarDropdownSeparator
        UFNavBarItem: typeof NavBarItem
        UFNavBarUserCard: typeof NavBarUserCard
        UFNavBarUserCardButton: typeof NavBarUserCardButton
        UFSideBar: typeof SideBar
        UFSideBarDropdown: typeof SideBarDropdown
        UFSideBarItem: typeof SideBarItem
        UFSideBarLabel: typeof SideBarLabel
    }
}

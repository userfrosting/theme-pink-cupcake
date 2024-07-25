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
import FormLogin from './components/Content/FormLogin.vue'
import NavBar from './components/NavBar/NavBar.vue'
import NavBarDropdown from './components/NavBar/NavBarDropdown.vue'
import NavBarDropdownSeparator from './components/NavBar/NavBarDropdownSeparator.vue'
import NavBarItem from './components/NavBar/NavBarItem.vue'
import NavBarLogin from './components/NavBar/NavBarLogin.vue'
import NavBarUserCard from './components/NavBar/NavBarUserCard.vue'
import NavBarUserCardButton from './components/NavBar/NavBarUserCardButton.vue'
import PageLogin from './views/PageLogin.vue'
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
    FormLogin,
    NavBar,
    NavBarDropdown,
    NavBarDropdownSeparator,
    NavBarItem,
    NavBarLogin,
    NavBarUserCard,
    NavBarUserCardButton,
    PageLogin,
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
            .component('UFFormLogin', FormLogin)
            .component('UFNavBar', NavBar)
            .component('UFNavBarDropdown', NavBarDropdown)
            .component('UFNavBarDropdownSeparator', NavBarDropdownSeparator)
            .component('UFNavBarItem', NavBarItem)
            .component('UFNavBarLogin', NavBarLogin)
            .component('UFNavBarUserCard', NavBarUserCard)
            .component('UFNavBarUserCardButton', NavBarUserCardButton)
            .component('UFPageLogin', PageLogin)
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
        UFFormLogin: typeof FormLogin
        UFNavBar: typeof NavBar
        UFNavBarDropdown: typeof NavBarDropdown
        UFNavBarDropdownSeparator: typeof NavBarDropdownSeparator
        UFNavBarLogin: typeof NavBarLogin
        UFNavBarItem: typeof NavBarItem
        UFNavBarUserCard: typeof NavBarUserCard
        UFNavBarUserCardButton: typeof NavBarUserCardButton
        UFPageLogin: typeof PageLogin
        UFSideBar: typeof SideBar
        UFSideBarDropdown: typeof SideBarDropdown
        UFSideBarItem: typeof SideBarItem
        UFSideBarLabel: typeof SideBarLabel
    }
}

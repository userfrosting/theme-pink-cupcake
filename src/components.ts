/**
 * Register every component globally
 * See : https://vuejs.org/guide/components/registration
 */
import type { App } from 'vue'

import UFAlert from './components/UFAlert.vue'
import UFLabel from './components/UFLabel.vue'
import AppLink from './components/Content/AppLink.vue'
import InfoBox from './components/Content/InfoBox.vue'
import CardBox from './components/Content/CardBox.vue'
import CardBoxBig from './components/Content/CardBoxBig.vue'
import MainContent from './components/Content/MainContent.vue'
import HeaderPage from './components/Content/HeaderPage.vue'
import FooterContent from './components/Content/FooterContent.vue'
import FormLogin from './components/Content/FormLogin.vue'
import FormRegister from './components/Content/FormRegister.vue'
import FormForgotPassword from './components/Content/FormForgotPassword.vue'
import NavBar from './components/NavBar/NavBar.vue'
import NavBarDropdown from './components/NavBar/NavBarDropdown.vue'
import NavBarDropdownSeparator from './components/NavBar/NavBarDropdownSeparator.vue'
import NavBarItem from './components/NavBar/NavBarItem.vue'
import NavBarLogin from './components/NavBar/NavBarLogin.vue'
import NavBarUserCard from './components/NavBar/NavBarUserCard.vue'
import NavBarUserCardButton from './components/NavBar/NavBarUserCardButton.vue'
import PageLogin from './views/PageLogin.vue'
import PageRegister from './views/PageRegister.vue'
import PageForgotPassword from './views/PageForgotPassword.vue'
import PageResendVerification from './views/PageResendVerification.vue'
import SideBar from './components/SideBar/SideBar.vue'
import SideBarDropdown from './components/SideBar/SideBarDropdown.vue'
import SideBarItem from './components/SideBar/SideBarItem.vue'
import SideBarLabel from './components/SideBar/SideBarLabel.vue'
import SprunjeColumn from './components/Sprunjer/SprunjeColumn.vue'
import SprunjeHeader from './components/Sprunjer/SprunjeHeader.vue'
import SprunjePaginator from './components/Sprunjer/SprunjePaginator.vue'
import SprunjeTable from './components/Sprunjer/SprunjeTable.vue'

export {
    UFAlert,
    UFLabel,
    AppLink,
    InfoBox,
    CardBox,
    CardBoxBig,
    MainContent,
    HeaderPage,
    FooterContent,
    FormLogin,
    FormRegister,
    FormForgotPassword,
    NavBar,
    NavBarDropdown,
    NavBarDropdownSeparator,
    NavBarItem,
    NavBarLogin,
    NavBarUserCard,
    NavBarUserCardButton,
    PageLogin,
    PageRegister,
    PageForgotPassword,
    PageResendVerification,
    SideBar,
    SideBarDropdown,
    SideBarItem,
    SideBarLabel,
    SprunjeColumn,
    SprunjeHeader,
    SprunjePaginator,
    SprunjeTable
}

export default {
    install: (app: App) => {
        app.component('UFAlert', UFAlert)
            .component('UFLabel', UFLabel)
            .component('UFAppLink', AppLink)
            .component('UFInfoBox', InfoBox)
            .component('UFCardBox', CardBox)
            .component('UFCardBoxBig', CardBoxBig)
            .component('UFMainContent', MainContent)
            .component('UFHeaderPage', HeaderPage)
            .component('UFFooterContent', FooterContent)
            .component('UFFormLogin', FormLogin)
            .component('UFFormRegister', FormRegister)
            .component('UFFormForgotPassword', FormForgotPassword)
            .component('UFNavBar', NavBar)
            .component('UFNavBarDropdown', NavBarDropdown)
            .component('UFNavBarDropdownSeparator', NavBarDropdownSeparator)
            .component('UFNavBarItem', NavBarItem)
            .component('UFNavBarLogin', NavBarLogin)
            .component('UFNavBarUserCard', NavBarUserCard)
            .component('UFNavBarUserCardButton', NavBarUserCardButton)
            .component('UFPageLogin', PageLogin)
            .component('UFPageRegister', PageRegister)
            .component('UFPageForgotPassword', PageForgotPassword)
            .component('UFPageResendVerification', PageResendVerification)
            .component('UFSideBar', SideBar)
            .component('UFSideBarDropdown', SideBarDropdown)
            .component('UFSideBarItem', SideBarItem)
            .component('UFSideBarLabel', SideBarLabel)
            .component('UFSprunjeColumn', SprunjeColumn)
            .component('UFSprunjeHeader', SprunjeHeader)
            .component('UFSprunjePaginator', SprunjePaginator)
            .component('UFSprunjeTable', SprunjeTable)
    }
}

declare module 'vue' {
    export interface GlobalComponents {
        UFAlert: typeof UFAlert
        UFLabel: typeof UFLabel
        UFAppLink: typeof AppLink
        UFInfoBox: typeof InfoBox
        UFCardBox: typeof CardBox
        UFCardBoxBig: typeof CardBoxBig
        UFMainContent: typeof MainContent
        UFHeaderPage: typeof HeaderPage
        UFFooterContent: typeof FooterContent
        UFFormLogin: typeof FormLogin
        UFFormRegister: typeof FormRegister
        UFFormForgotPassword: typeof FormForgotPassword
        UFNavBar: typeof NavBar
        UFNavBarDropdown: typeof NavBarDropdown
        UFNavBarDropdownSeparator: typeof NavBarDropdownSeparator
        UFNavBarLogin: typeof NavBarLogin
        UFNavBarItem: typeof NavBarItem
        UFNavBarUserCard: typeof NavBarUserCard
        UFNavBarUserCardButton: typeof NavBarUserCardButton
        UFPageLogin: typeof PageLogin
        UFPageRegister: typeof PageRegister
        UFPageForgotPassword: typeof PageForgotPassword
        UFPageResendVerification: typeof PageResendVerification
        UFSideBar: typeof SideBar
        UFSideBarDropdown: typeof SideBarDropdown
        UFSideBarItem: typeof SideBarItem
        UFSideBarLabel: typeof SideBarLabel
        UFSprunjeColumn: typeof SprunjeColumn
        UFSprunjeHeader: typeof SprunjeHeader
        UFSprunjePaginator: typeof SprunjePaginator
        UFSprunjeTable: typeof SprunjeTable
    }
}

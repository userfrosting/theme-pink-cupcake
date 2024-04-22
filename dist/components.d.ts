import type { App } from 'vue';
import { default as SideBarLabel } from './components/SideBar/SideBarLabel.vue';
import { default as SideBarItem } from './components/SideBar/SideBarItem.vue';
import { default as SideBarDropdown } from './components/SideBar/SideBarDropdown.vue';
import { default as SideBar } from './components/SideBar/SideBar.vue';
import { default as NavBarUserCardButton } from './components/NavBar/NavBarUserCardButton.vue';
import { default as NavBarUserCard } from './components/NavBar/NavBarUserCard.vue';
import { default as NavBarItem } from './components/NavBar/NavBarItem.vue';
import { default as NavBarDropdownSeparator } from './components/NavBar/NavBarDropdownSeparator.vue';
import { default as NavBarDropdown } from './components/NavBar/NavBarDropdown.vue';
import { default as NavBar } from './components/NavBar/NavBar.vue';
import { default as MainContent } from './components/Content/MainContent.vue';
import { default as AppLink } from './components/Content/AppLink.vue';
import { default as AlertContainer } from './components/AlertContainer.vue';

export { AlertContainer, AppLink, MainContent, NavBar, NavBarDropdown, NavBarDropdownSeparator, NavBarItem, NavBarUserCard, NavBarUserCardButton, SideBar, SideBarDropdown, SideBarItem, SideBarLabel };
declare const _default: {
    install: (app: App, options?: {
        prefix: string;
    }) => void;
};
export default _default;

<script setup>
import { MainContent } from '@userfrosting/theme-pink-cupcake/Content'
import { NavBar } from '@userfrosting/theme-pink-cupcake/NavBar'
import { SideBar, SideBarLabel, SideBarItem, SideBarDropdown } from '@userfrosting/theme-pink-cupcake/SideBar'
import NavMenuMain from '../components/NavMenuMain.vue'
</script>

<template>
    <NavBar title="Pink Cupcake" to="/">
        <NavMenuMain />
    </NavBar>
    <SideBar>
        <SideBarLabel label="NAVIGATION" />
        <SideBarItem :to="{ name: 'dashboard.index' }" faIcon="gauge">Dashboard</SideBarItem>
        <SideBarItem :to="{ name: 'dashboard.table' }" faIcon="table" label="Table" />
        <!-- Dropdown -->
        <SideBarDropdown :to="{ name: 'dashboard.template' }" label="Templates" faIcon="palette">
            <SideBarItem :to="{ name: 'dashboard.template.test' }" label="Test" />
            <SideBarItem label="Article" />
            <SideBarItem label="Album" />
            <SideBarItem label="Cover" />
            <SideBarItem label="Cards" />
            <SideBarItem label="News Blog" />
            <SideBarItem label="Price" />
            <SideBarItem label="Login" />
            <SideBarItem label="Login - Dark" />
        </SideBarDropdown>
        <SideBarItem label="Album" faIcon="fa-regular fa-images" />
        <SideBarItem label="Featured Content" faIcon="fa-regular fa-flag" />
        <SideBarItem label="Tips" faIcon="fa-regular fa-life-ring" />
        <!-- Dropdown 2 -->
        <SideBarDropdown to="/" label="Reports" faIcon="fa-regular fa-file-lines">
            <SideBarItem label="Sub item" />
            <SideBarItem label="Sub item" />
            <SideBarDropdown label="Sub Nested" hideCaret>
                <SideBarItem label="Sub sub item" />
                <SideBarItem label="Sub sub item" />
            </SideBarDropdown>
        </SideBarDropdown>
    </SideBar>
    <MainContent>
        <slot></slot>
    </MainContent>
</template>

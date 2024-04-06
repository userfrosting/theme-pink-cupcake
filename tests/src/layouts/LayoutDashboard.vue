<script setup>
import { MainContent } from '@userfrosting/theme-pink-cupcake/Content'
import { NavBar } from '@userfrosting/theme-pink-cupcake/NavBar'
import { SideBar, SideBarLabel, SideBarItem, SideBarDropdown } from '@userfrosting/theme-pink-cupcake/SideBar'
import NavMenuMain from '../components/NavMenuMain.vue'
</script>

<template>
    <NavBar title="Pink Cupcake" href="/dashboard">
        <NavMenuMain />
    </NavBar>
    <SideBar>
        <SideBarLabel label="NAVIGATION" />
        <SideBarItem href="/" faIcon="fa-regular fa-comments">Messages</SideBarItem>
        <SideBarItem label="Friends" icon="users" active />
        <!-- Dropdown -->
        <SideBarDropdown label="Templates" faIcon="palette">
            <SideBarItem label="Article" active />
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
        <SideBarDropdown label="Reports" faIcon="fa-regular fa-file-lines">
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

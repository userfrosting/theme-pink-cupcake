<script setup>
import { MainContent } from '@userfrosting/theme-pink-cupcake/Content'
import { NavBar } from '@userfrosting/theme-pink-cupcake/NavBar'
import { SideBar, SideBarLabel, SideBarItem, SideBarDropdown } from '@userfrosting/theme-pink-cupcake/SideBar'
import NavMenuMain from '../components/NavMenuMain.vue'
</script>

<template>
    <NavBar title="Pink Cupcake" to="/dashboard">
        <NavMenuMain active="dashboard" />
    </NavBar>
    <SideBar>
        <SideBarLabel label="NAVIGATION" />
        <SideBarItem to="/" faIcon="fa-regular fa-comments">Messages</SideBarItem>
        <SideBarItem href="#" label="Friends" icon="users" active />
        <!-- Dropdown -->
        <SideBarDropdown label="Templates" faIcon="palette">
            <SideBarItem href="#" label="Article" active />
            <SideBarItem href="#" label="Album" />
            <SideBarItem href="#" label="Cover" />
            <SideBarItem href="#" label="Cards" />
            <SideBarItem href="#" label="News Blog" />
            <SideBarItem href="#" label="Price" />
            <SideBarItem href="#" label="Login" />
            <SideBarItem href="#" label="Login - Dark" />
        </SideBarDropdown>
        <SideBarItem href="#" label="Album" faIcon="fa-regular fa-images" />
        <SideBarItem href="#" label="Featured Content" faIcon="fa-regular fa-flag" />
        <SideBarItem href="#" label="Tips" faIcon="fa-regular fa-life-ring" />
        <!-- Dropdown 2 -->
        <SideBarDropdown label="Reports" faIcon="fa-regular fa-file-lines">
            <SideBarItem href="#" label="Sub item" />
            <SideBarItem href="#" label="Sub item" />
            <SideBarDropdown label="Sub Nested" hideCaret>
                <SideBarItem href="#" label="Sub sub item" />
                <SideBarItem href="#" label="Sub sub item" />
            </SideBarDropdown>
        </SideBarDropdown>
    </SideBar>
    <MainContent>
        <slot></slot>
    </MainContent>
</template>

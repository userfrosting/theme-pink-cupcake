<script setup>
import NavMenuMain from '../components/NavMenuMain.vue'
</script>

<template>
    <UFNavBar title="Pink Cupcake" to="/">
        <NavMenuMain />
    </UFNavBar>
    <UFSideBar>
        <UFSideBarLabel label="NAVIGATION" />
        <UFSideBarItem :to="{ name: 'dashboard.index' }" faIcon="gauge">Dashboard</UFSideBarItem>
        <UFSideBarItem :to="{ name: 'dashboard.table' }" faIcon="table" label="Table" />
        <!-- Dropdown -->
        <UFSideBarDropdown :to="{ name: 'dashboard.template' }" label="Templates" faIcon="palette">
            <UFSideBarItem :to="{ name: 'dashboard.template.test' }" label="Test" />
            <UFSideBarItem label="Article" />
            <UFSideBarItem label="Album" />
            <UFSideBarItem label="Cover" />
            <UFSideBarItem label="Cards" />
            <UFSideBarItem label="News Blog" />
            <UFSideBarItem label="Price" />
            <UFSideBarItem label="Login" />
            <UFSideBarItem label="Login - Dark" />
        </UFSideBarDropdown>
        <UFSideBarItem label="Album" faIcon="fa-regular fa-images" />
        <UFSideBarItem label="Featured Content" faIcon="fa-regular fa-flag" />
        <UFSideBarItem label="Tips" faIcon="fa-regular fa-life-ring" />
        <!-- Dropdown 2 -->
        <UFSideBarDropdown to="/" label="Reports" faIcon="fa-regular fa-file-lines">
            <UFSideBarItem label="Sub item" />
            <UFSideBarItem label="Sub item" />
            <UFSideBarDropdown label="Sub Nested" hideCaret>
                <UFSideBarItem label="Sub sub item" />
                <UFSideBarItem label="Sub sub item" />
            </UFSideBarDropdown>
        </UFSideBarDropdown>
    </UFSideBar>
    <UFMainContent>
        <slot></slot>
    </UFMainContent>
</template>

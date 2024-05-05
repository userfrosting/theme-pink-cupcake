<script setup lang="ts">
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
        <UFSideBarItem
            :to="{ name: 'dashboard.alerts' }"
            faIcon="triangle-exclamation"
            label="Alerts" />
        <!-- Dropdown -->
        <UFSideBarDropdown :to="{ name: 'dashboard.template' }" label="Templates" faIcon="palette">
            <UFSideBarItem :to="{ name: 'dashboard.template.test' }" label="Test" />
            <UFSideBarItem to='' label="Article" />
            <UFSideBarItem to='' label="Album" />
            <UFSideBarItem to='' label="Cover" />
            <UFSideBarItem to='' label="Cards" />
            <UFSideBarItem to='' label="News Blog" />
            <UFSideBarItem to='' label="Price" />
            <UFSideBarItem to='' label="Login" />
            <UFSideBarItem to='' label="Login - Dark" />
        </UFSideBarDropdown>
        <!-- Dropdown 2 -->
        <UFSideBarDropdown to="/" label="Reports" faIcon="fa-regular fa-file-lines">
            <UFSideBarItem to='' label="Sub item" />
            <UFSideBarItem to='' label="Sub item" />
            <UFSideBarDropdown to='' label="Sub Nested" hideCaret>
                <UFSideBarItem to='' label="Sub sub item" />
                <UFSideBarItem to='' label="Sub sub item" />
            </UFSideBarDropdown>
        </UFSideBarDropdown>
    </UFSideBar>
    <UFMainContent>
        <slot></slot>
    </UFMainContent>
</template>

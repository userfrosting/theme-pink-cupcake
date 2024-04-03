<script setup>
import { DashboardLayout } from '@userfrosting/theme-pink-cupcake/Layouts'
import NavMenuMain from '../components/NavMenuMain.vue'
import { SideBarLabel, SideBarItem, SideBarDropdown } from '@userfrosting/theme-pink-cupcake/SideBar'
import LoremIpsum from '../components/LoremIpsum.vue';
</script>

<template>
    <DashboardLayout>
        <template #title>Pink Cupcake</template>
        <template #navbar>
            <NavMenuMain active="dashboard" />
        </template>
        <template #sidebar>
            <SideBarLabel label="NAVIGATION" />
            <SideBarItem url="#" faIcon="fa-regular fa-comments">Messages</SideBarItem>
            <SideBarItem url="#" label="Friends" icon="users" active />
            <!-- Dropdown -->
            <SideBarDropdown label="Templates" faIcon="palette">
                <SideBarItem url="#" label="Article" active />
                <SideBarItem url="#" label="Album" />
                <SideBarItem url="#" label="Cover" />
                <SideBarItem url="#" label="Cards" />
                <SideBarItem url="#" label="News Blog" />
                <SideBarItem url="#" label="Price" />
                <SideBarItem url="#" label="Login" />
                <SideBarItem url="#" label="Login - Dark" />
            </SideBarDropdown>
            <SideBarItem url="#" label="Album" faIcon="fa-regular fa-images" />
            <SideBarItem url="#" label="Featured Content" faIcon="fa-regular fa-flag" />
            <SideBarItem url="#" label="Tips" faIcon="fa-regular fa-life-ring" />
            <!-- Dropdown 2 -->
            <SideBarDropdown label="Reports" faIcon="fa-regular fa-file-lines">
                <SideBarItem url="#" label="Sub item" />
                <SideBarItem url="#" label="Sub item" />
                <SideBarDropdown label="Sub Nested" hideCaret>
                    <SideBarItem url="#" label="Sub sub item" />
                    <SideBarItem url="#" label="Sub sub item" />
                </SideBarDropdown>
            </SideBarDropdown>
        </template>
        <LoremIpsum />
    </DashboardLayout>
</template>

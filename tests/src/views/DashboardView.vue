<script setup>
import { DashboardLayout } from '@userfrosting/theme-pink-cupcake/Layouts'
import { NavBarLink, NavBarItem, NavBarDropdown } from '@userfrosting/theme-pink-cupcake/NavBar'
import { SideBarLabel, SideBarItem, SideBarDropdown } from '@userfrosting/theme-pink-cupcake/SideBar'
import LoremIpsum from '../components/LoremIpsum.vue';
</script>

<template>
    <DashboardLayout>
        <template #title>Pink Cupcake</template>
        <template #navbar>
            <NavBarLink url="/" label="Base Layout" />
            <NavBarLink url="/dashboard" label="Dashboard" active />
            <NavBarDropdown label="Foo">
                <NavBarItem url="#" label="Active" active />
                <NavBarItem url="#" label="Mint" />
                <NavBarItem url="#" label="Item" />
            </NavBarDropdown>
        </template>
        <template #sidebar>
            <SideBarLabel label="NAVIGATION" />
            <SideBarItem url="#" icon="comments">Messages</SideBarItem>
            <SideBarItem url="#" icon="user-group" active><span data-uk-icon="icon: users"
                    class="uk-margin-small-right"></span> Friends</SideBarItem>
            <!-- Dropdown -->
            <SideBarDropdown label="Templates" icon="palette">
                <template #label>
                    <font-awesome-icon class="uk-margin-small-right" :icon="['fas', 'palette']" /> Templates
                </template>
                <SideBarItem url="#" label="Article" active />
                <SideBarItem url="#" label="Album" />
                <SideBarItem url="#" label="Cover" />
                <SideBarItem url="#" label="Cards" />
                <SideBarItem url="#" label="News Blog" />
                <SideBarItem url="#" label="Price" />
                <SideBarItem url="#" label="Login" />
                <SideBarItem url="#" label="Login - Dark" />
            </SideBarDropdown>
            <SideBarItem url="#" label="Album" icon="images" />
            <SideBarItem url="#" label="Featured Content" icon="flag" />
            <SideBarItem url="#" label="Tips" icon="life-ring" />
            <!-- Dropdown 2 -->
            <SideBarDropdown label="Reports" icon="file-lines">
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

<script setup>
import { NavBarItem, NavBarDropdown, NavBarDropdownSeparator } from '@userfrosting/theme-pink-cupcake/NavBar'
</script>

<template>
    <NavBarItem href="https://userfrosting.com"><font-awesome-icon icon="fa-solid fa-house" /></NavBarItem>
    <NavBarItem :href="{ name: 'page.index' }" label="Page" />
    <NavBarItem :href="{ name: 'dashboard.index' }" label="Dashboard" />
    <NavBarDropdown label="Dropdown">
        <NavBarItem label="Active" active />
        <NavBarItem label="Inactive" />
        <NavBarDropdownSeparator />
        <NavBarItem href="/dashboard" label="Dashboard" />
    </NavBarDropdown>
</template>
<script setup>
import { NavBarItem, NavBarDropdown, NavBarDropdownSeparator } from '@userfrosting/theme-pink-cupcake/NavBar'

defineProps({
    active: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <NavBarItem href="https://userfrosting.com"><font-awesome-icon icon="fa-solid fa-house" /></NavBarItem>
    <NavBarItem :to="{ name: 'page.index' }" label="Page" :active="active == 'main'" />
    <NavBarItem :to="{ name: 'dashboard.index' }" label="Dashboard" :active="active == 'dashboard'" />
    <NavBarDropdown label="Dropdown">
        <NavBarItem to="/" label="Active" active />
        <NavBarItem to="/" label="Inactive" />
        <NavBarDropdownSeparator />
        <NavBarItem to="/dashboard" label="Dashboard" />
    </NavBarDropdown>
</template>
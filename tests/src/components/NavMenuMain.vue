<script setup>
import { NavBarItem, NavBarDropdown, NavBarDropdownSeparator } from '@userfrosting/theme-pink-cupcake/NavBar'
</script>

<template>
    <NavBarItem to="https://userfrosting.com"><font-awesome-icon icon="fa-solid fa-house" /></NavBarItem>
    <NavBarItem :to="{ name: 'page.index' }" label="Page" />
    <NavBarItem :to="{ name: 'dashboard.index' }" label="Dashboard" />
    <NavBarDropdown label="Dropdown">
        <NavBarItem label="Label" />
        <NavBarItem label="Label" />
        <NavBarDropdownSeparator />
        <NavBarItem to="/" label="Page" />
        <NavBarItem to="/dashboard" label="Dashboard" />
    </NavBarDropdown>
</template>
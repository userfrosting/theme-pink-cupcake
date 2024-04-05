<script setup>
import { NavBarItem, NavBarDropdown } from '@userfrosting/theme-pink-cupcake/NavBar'

defineProps({
    active: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <NavBarItem href="/"><font-awesome-icon icon="fa-solid fa-house" /></NavBarItem>
    <NavBarItem to="/" label="Base Layout" :active="active == 'main'" />
    <NavBarItem to="/dashboard" label="Dashboard" :active="active == 'dashboard'" />
    <NavBarDropdown label="Foo">
        <NavBarItem href="#" label="Active" active />
        <NavBarItem href="#" label="Mint" />
        <NavBarItem to="/dashboard" label="Item" />
    </NavBarDropdown>
</template>
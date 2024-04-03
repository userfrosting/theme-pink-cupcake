<script setup>
import { NavBarLink, NavBarItem, NavBarDropdown } from '@userfrosting/theme-pink-cupcake/NavBar'

defineProps({
    active: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <NavBarLink url="/" label="Base Layout" :active="active == 'main'" />
    <NavBarLink url="/dashboard" label="Dashboard" :active="active == 'dashboard'" />
    <NavBarDropdown label="Foo">
        <NavBarItem url="#" label="Active" active />
        <NavBarItem url="#" label="Mint" />
        <NavBarItem url="#" label="Item" />
    </NavBarDropdown>
</template>
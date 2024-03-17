<script setup>
import { DashboardLayout } from '@userfrosting/theme-pinkcupcake/Layouts'
import { NavBarLink, NavBarItem, NavBarDropdown } from '@userfrosting/theme-pinkcupcake/NavBar'
import LoremIpsum from '../components/LoremIpsum.vue';
</script>

<template>
    <DashboardLayout>
        <template #title>Pink Cupcake</template>
        <template #links>
            <NavBarLink url="/" label="Base Layout" />
            <NavBarLink url="/dashboard" label="Dashboard" active />
            <NavBarDropdown label="Foo">
                <NavBarItem url="#" label="Active" active />
                <NavBarItem url="#" label="Mint" />
                <NavBarItem url="#" label="Item" />
            </NavBarDropdown>
        </template>
        <LoremIpsum />
    </DashboardLayout>
</template>

<script setup>
import { BaseLayout } from '@userfrosting/theme-pink-cupcake/Layouts'
import { NavBarLink, NavBarItem, NavBarDropdown } from '@userfrosting/theme-pink-cupcake/NavBar'
import LoremIpsum from '../components/LoremIpsum.vue';
</script>

<template>
    <BaseLayout>
        <template #title>Pink Cupcake</template>
        <template #navbar>
            <NavBarLink url="/" label="Base Layout" active />
            <NavBarLink url="/dashboard" label="Dashboard" />
            <NavBarDropdown label="Foo">
                <NavBarItem url="#" label="Active" active />
                <NavBarItem url="#" label="Mint" />
                <NavBarItem url="#" label="Item" />
            </NavBarDropdown>
        </template>
        <LoremIpsum />
    </BaseLayout>
</template>

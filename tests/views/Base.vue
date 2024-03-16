<script setup>
import { BaseLayout, NavbarLink, NavbarItem, NavbarDropdown } from 'PinkCupcake'
import Lorem from '../components/Lorem.vue';
</script>

<template>
    <BaseLayout>
        <template #title>Pink Cupcake</template>
        <template #links>
            <NavbarLink url="/" label="Base Layout" active />
            <NavbarLink url="/dashboard" label="Dashboard" />
            <NavbarDropdown label="Foo">
                <NavbarItem url="#" label="Active" active />
                <NavbarItem url="#" label="Mint" />
                <NavbarItem url="#" label="Item" />
            </NavbarDropdown>
        </template>
        <Lorem />
    </BaseLayout>
</template>

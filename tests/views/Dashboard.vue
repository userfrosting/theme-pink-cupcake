<script setup>
import { DashboardLayout, NavbarLink, NavbarItem, NavbarDropdown } from '@userfrosting/theme-pinkcupcake'
import Lorem from '../components/Lorem.vue';
</script>

<template>
    <DashboardLayout>
        <template #title>Pink Cupcake</template>
        <template #links>
            <NavbarLink url="/" label="Base Layout" />
            <NavbarLink url="/dashboard" label="Dashboard" active />
            <NavbarDropdown label="Foo">
                <NavbarItem url="#" label="Active" active />
                <NavbarItem url="#" label="Mint" />
                <NavbarItem url="#" label="Item" />
            </NavbarDropdown>
        </template>
        <Lorem />
    </DashboardLayout>
</template>

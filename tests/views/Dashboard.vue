<script setup>
import Dashboard from '@userfrosting/theme-pinkcupcake/layouts/Dashboard.vue'
import NavbarItem from '@userfrosting/theme-pinkcupcake/components/Navbar/Item.vue'
import NavbarLink from '@userfrosting/theme-pinkcupcake/components/Navbar/Link.vue'
import Dropdown from '@userfrosting/theme-pinkcupcake/components/Navbar/Dropdown.vue'
import Lorem from '../components/Lorem.vue';
</script>

<template>
    <Dashboard>
        <template #title>Pink Cupcake</template>
        <template #links>
            <NavbarLink url="/" label="Base Layout" />
            <NavbarLink url="/dashboard" label="Dashboard" active />
            <Dropdown label="Foo">
                <NavbarItem url="#" label="Active" active />
                <NavbarItem url="#" label="Mint" />
                <NavbarItem url="#" label="Item" />
            </Dropdown>
        </template>
        <Lorem />
    </Dashboard>
</template>

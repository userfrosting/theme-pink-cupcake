<script setup>
import BaseLayout from '@userfrosting/theme-pinkcupcake/layouts/Base.vue'
import NavbarItem from '@userfrosting/theme-pinkcupcake/components/Navbar/Item.vue'
import NavbarLink from '@userfrosting/theme-pinkcupcake/components/Navbar/Link.vue'
import Dropdown from '@userfrosting/theme-pinkcupcake/components/Navbar/Dropdown.vue'
import Lorem from '../components/Lorem.vue';
</script>

<template>
    <BaseLayout>
        <template #title>Pink Cupcake</template>
        <template #links>
            <NavbarLink url="/" label="Base Layout" active />
            <NavbarLink url="/dashboard" label="Dashboard" />
            <Dropdown label="Foo">
                <NavbarItem url="#" label="Active" active />
                <NavbarItem url="#" label="Mint" />
                <NavbarItem url="#" label="Item" />
            </Dropdown>
        </template>
        <Lorem />
    </BaseLayout>
</template>

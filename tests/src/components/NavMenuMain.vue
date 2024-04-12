<script setup>
import { ref } from 'vue'
import { NavBarItem, NavBarDropdown, NavBarDropdownSeparator, NavBarUserCard, NavBarUserCardButton } from '@userfrosting/theme-pink-cupcake/NavBar'

const count = ref(0)

function increment() {
  count.value++
}
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
    <NavBarUserCard username="John Doe" avatar="https://gravatar.com/avatar/?d=mm" meta="Administrator">
        <NavBarUserCardButton label="External" to="https://userfrosting.com" />
        <NavBarUserCardButton label="Internal" :to="{ name: 'page.index' }" />
        <NavBarUserCardButton @click="increment()">Action : {{ count }}</NavBarUserCardButton>
    </NavBarUserCard>
</template>
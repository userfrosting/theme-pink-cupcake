<script setup lang="ts">
import NavBarItem from '@userfrosting/theme-pink-cupcake/components/NavBar/NavBarItem.vue'
import { ref } from 'vue'
const count = ref(0)

function increment() {
    count.value++
}
</script>

<template>
    <UFNavBarItem to="https://userfrosting.com">
        <font-awesome-icon icon="fa-solid fa-house" />
    </UFNavBarItem>
    <UFNavBarItem :to="{ name: 'page.index' }" label="Page" />
    <UFNavBarItem :to="{ name: 'dashboard.index' }" label="Dashboard" />
    <UFNavBarDropdown label="Dropdown">
        <NavBarItem to='' label="Label" /> <!-- Example of NOT using the global component -->
        <UFNavBarItem to='' label="Label" />
        <UFNavBarDropdownSeparator />
        <UFNavBarItem to="/" label="Page" />
        <UFNavBarItem to="/dashboard" label="Dashboard" />
    </UFNavBarDropdown>
    <UFNavBarUserCard
        username="John Doe"
        avatar="https://gravatar.com/avatar/?d=mm"
        meta="Administrator">
        <UFNavBarUserCardButton label="External" to="https://userfrosting.com" />
        <UFNavBarUserCardButton label="Internal" :to="{ name: 'page.index' }" />
        <UFNavBarUserCardButton @click="increment()">Action : {{ count }}</UFNavBarUserCardButton>
    </UFNavBarUserCard>
</template>

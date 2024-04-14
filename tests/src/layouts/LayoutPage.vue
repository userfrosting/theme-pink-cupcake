<script setup>
import NavMenuMain from '../components/NavMenuMain.vue'
import NavBar from '@userfrosting/theme-pink-cupcake/NavBar/NavBar'
</script>

<template>
    <NavBar title="Pink Cupcake">
        <NavMenuMain />
    </NavBar>
    <UFMainContent>
        <slot></slot>
    </UFMainContent>
</template>

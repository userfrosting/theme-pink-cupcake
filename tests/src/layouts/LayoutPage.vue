<script setup>
import { MainContent } from '@userfrosting/theme-pink-cupcake/Content'
import { NavBar } from '@userfrosting/theme-pink-cupcake/NavBar'
import NavMenuMain from '../components/NavMenuMain.vue'
</script>

<template>
    <NavBar title="Pink Cupcake">
        <NavMenuMain />
    </NavBar>
    <MainContent>
        <slot></slot>
    </MainContent>
</template>

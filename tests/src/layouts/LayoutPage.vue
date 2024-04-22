<script setup lang="ts">
import NavMenuMain from '../components/NavMenuMain.vue'
import NavBar from '@userfrosting/theme-pink-cupcake/components/NavBar/NavBar.vue' // Test Manual direct import
import { MainContent } from '@userfrosting/theme-pink-cupcake/components' // Test manual import from export
</script>

<template>
    <NavBar title="Pink Cupcake">
        <NavMenuMain />
    </NavBar>
    <MainContent>
        <slot></slot>
    </MainContent>
</template>

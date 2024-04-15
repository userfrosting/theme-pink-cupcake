<script setup lang="ts">
import NavMenuMain from '../components/NavMenuMain.vue'
// import NavBar from '@userfrosting/theme-pink-cupcake/NavBar/NavBar' // Test Manual direct import
// import { MainContent } from '@userfrosting/theme-pink-cupcake/components' // Test manual import from export
</script>

<template>
    <UFNavBar title="Pink Cupcake">
        <NavMenuMain />
    </UFNavBar>
    <UFMainContent>
        <slot></slot>
    </UFMainContent>
</template>

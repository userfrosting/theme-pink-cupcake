<script setup lang="ts">
import LayoutDashboard from '../layouts/LayoutDashboard.vue'
import AlertContainer from '@userfrosting/theme-pink-cupcake/AlertContainer'
</script>

<template>
    <LayoutDashboard>
        <AlertContainer title="Primary" description="Lorem Ipsum" />
        <AlertContainer title="Success" description="Lorem Ipsum" />
        <AlertContainer title="Warning" description="Lorem Ipsum" />
        <AlertContainer title="Danger" description="Lorem Ipsum" />
    </LayoutDashboard>
</template>

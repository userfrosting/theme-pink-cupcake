<script setup>
import { BaseLayout } from '@userfrosting/theme-pink-cupcake/Layouts'
import NavMenuMain from '../components/NavMenuMain.vue'
</script>

<template>
    <BaseLayout>
        <template #title>Pink Cupcake</template>
        <template #navbar>
            <NavMenuMain active="main" />
        </template>
        <slot></slot>
    </BaseLayout>
</template>

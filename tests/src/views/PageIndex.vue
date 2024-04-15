<script setup lang="ts">
import LayoutPage from '../layouts/LayoutPage.vue'
import LoremIpsum from '../components/LoremIpsum.vue'
</script>

<template>
    <LayoutPage>
        <h1>Lorem ipsum</h1>
        <div class="uk-column-1-2">
            <LoremIpsum />
        </div>
    </LayoutPage>
</template>

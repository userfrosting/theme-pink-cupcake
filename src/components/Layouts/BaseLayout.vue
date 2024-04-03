<script setup>
import NavBar from '../NavBar/NavBar.vue'
</script>

<template>
    <header>
        <NavBar>
            <template #title>
                <slot name="title"></slot>
            </template>
            <slot name="navbar"></slot>
        </NavBar>
    </header>
    <div class="uf-main uk-section uk-section-default">
        <div class="uk-container">
            <slot></slot>
        </div>
    </div>
</template>

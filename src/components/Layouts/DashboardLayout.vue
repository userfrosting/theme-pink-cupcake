<script setup>
import NavBar from '../NavBar/NavBar.vue'
import SideBar from '../SideBar/SideBar.vue'
</script>

<template>
    <header>
        <NavBar>
            <template #title>
                <slot name="title"></slot>
            </template>
            <template #links>
                <slot name="links"></slot>
            </template>
        </NavBar>
    </header>
    <SideBar />
    <div class="uf-main uk-section uk-section-default">
        <div class="uk-container">
            <slot></slot>
        </div>
    </div>
</template>
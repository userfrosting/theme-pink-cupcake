<script setup>
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import NavBar from '../NavBar/NavBar.vue'

UIkit.use(Icons)
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
    <div class="uf-main uk-section uk-section-default">
        <div class="uk-container">
            <slot>
                <RouterView />
            </slot>
        </div>
    </div>
</template>

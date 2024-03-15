<script setup>
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import Navbar from '../components/Navbar/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'

UIkit.use(Icons)
</script>

<template>
    <header>
        <Navbar>
            <template #title>
                <slot name="title"></slot>
            </template>
            <template #links>
                <slot name="links"></slot>
            </template>
        </Navbar>
    </header>
    <Sidebar />
    <div class="uf-main uk-section uk-section-default">
        <div class="uk-container">
            <slot>
                <RouterView />
            </slot>
        </div>
    </div>
</template>
<!-- TODO : Nest Base ? -->

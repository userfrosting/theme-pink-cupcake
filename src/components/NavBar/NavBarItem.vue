<script setup>
import { RouterLink } from 'vue-router'

defineProps({
    to: {
        type: String,
        default: ''
    },
    href: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    active: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <li :class="{ 'uk-active': active }">
        <RouterLink v-if="to" :to="to">
            <slot>{{ label }}</slot>
        </RouterLink>
        <a v-else :href="href">
            <slot>{{ label }}</slot>
        </a>
    </li>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
    to: {
        type: [String, Object],
        default: ''
    },
    href: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <RouterLink v-if="to" :to="to">
        <slot>{{ label }}</slot>
    </RouterLink>
    <a v-else :href="href">
        <slot>{{ label }}</slot>
    </a>
</template>

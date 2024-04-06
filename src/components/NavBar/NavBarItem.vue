<script setup>
import { AppLink } from '../Content'

defineProps({
    href: {
        type: [String, Object],
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
        <AppLink :href="href">
            <slot>{{ label }}</slot>
        </AppLink>
    </li>
</template>

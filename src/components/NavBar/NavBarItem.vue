<script setup>
import { DynamicLink } from '../Content'

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
    },
    active: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <li :class="{ 'uk-active': active }">
        <DynamicLink :href="href" :to="to">
            <slot>{{ label }}</slot>
        </DynamicLink>
    </li>
</template>

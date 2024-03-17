<script setup>
import { RouterLink } from 'vue-router'

defineProps({
    url: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <li :class="{ 'uk-active': active }">
        <RouterLink :to="url">{{ label }}</RouterLink>
    </li>
</template>

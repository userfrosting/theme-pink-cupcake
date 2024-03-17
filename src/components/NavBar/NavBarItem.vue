<script setup>
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
        <a :href="url">{{ label }}</a>
    </li>
</template>

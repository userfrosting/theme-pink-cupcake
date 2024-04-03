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
    },
    icon: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <li :class="{ 'uk-active': active }">
        <a :href="url">
            <font-awesome-icon class="uk-margin-small-right" :icon="['far', icon]" />
            <slot>{{ label }}</slot>
        </a>
    </li>
</template>

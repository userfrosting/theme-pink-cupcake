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
    },
    faIcon: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <li :class="{ 'uk-active': active }">
        <AppLink :href="href">
            <span v-if="icon" :data-uk-icon="icon" class="uk-margin-small-right"></span>
            <font-awesome-icon v-if="faIcon" class="uk-margin-small-right" :icon="faIcon" />
            <slot>{{ label }}</slot>
        </AppLink>
    </li>
</template>

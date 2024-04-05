<script setup>
import { DynamicLink } from '../Content'

defineProps({
    href: {
        type: String,
        default: ''
    },
    to: {
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
        <DynamicLink :href="href" :to="to">
            <span v-if="icon" :data-uk-icon="icon" class="uk-margin-small-right"></span>
            <font-awesome-icon v-if="faIcon" class="uk-margin-small-right" :icon="faIcon" />
            <slot>{{ label }}</slot>
        </DynamicLink>
    </li>
</template>

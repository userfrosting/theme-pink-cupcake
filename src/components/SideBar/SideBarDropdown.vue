<script setup>
import { RouterLink } from 'vue-router'

defineProps({
    to: {
        type: [String, Object],
        default: '#'
    },
    label: {
        type: String,
        default: ''
    },
    faIcon: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: ''
    },
    hideCaret: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <RouterLink v-bind="$props" custom v-slot="{ isActive }">
        <li class="uk-parent" :class="{ 'uk-open': isActive }">
            <a v-bind="$attrs">
                <span v-if="icon" :data-uk-icon="icon" class="uk-margin-small-right"></span>
                <font-awesome-icon v-if="faIcon" class="uk-margin-small-right" :icon="faIcon" />
                <slot name="label">{{ label }}</slot>
                <span uk-nav-parent-icon v-if="!hideCaret"></span>
            </a>
            <ul class="uk-nav-sub">
                <slot></slot>
            </ul>
        </li>
    </RouterLink>
</template>

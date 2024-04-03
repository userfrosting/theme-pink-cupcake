<script setup>
defineProps({
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
    <li class="uk-parent">
        <a href="#">
            <span v-if="icon" :data-uk-icon="icon" class="uk-margin-small-right"></span>
            <font-awesome-icon v-if="faIcon" class="uk-margin-small-right" :icon="faIcon" />
            <slot name="label">{{ label }}</slot>
            <span uk-nav-parent-icon v-if="!hideCaret"></span>
        </a>
        <ul class="uk-nav-sub">
            <slot></slot>
        </ul>
    </li>
</template>

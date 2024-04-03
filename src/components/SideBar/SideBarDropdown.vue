<script setup>
defineProps({
    label: {
        type: String,
        required: true
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
            <font-awesome-icon class="uk-margin-small-right" :icon="['far', icon]" />
            <slot name="label">{{ label }}</slot>
            <span uk-nav-parent-icon v-if="!hideCaret"></span>
        </a>
        <ul class="uk-nav-sub">
            <slot></slot>
        </ul>
    </li>
</template>

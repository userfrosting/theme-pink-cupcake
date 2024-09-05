<script setup>
import { RouterLink } from 'vue-router'

defineProps({
    to: {
        type: String,
        default: ''
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
                <span
                    v-if="icon"
                    :data-uk-icon="icon"
                    class="uk-margin-small-right"
                    data-test="icon"></span>
                <font-awesome-icon
                    v-if="faIcon"
                    class="uk-margin-small-right"
                    :icon="faIcon"
                    data-test="faIcon" />
                <slot name="label">{{ label }}</slot>
                <span uk-nav-parent-icon v-if="!hideCaret" data-test="caret"></span>
            </a>
            <ul class="uk-nav-sub" data-test="slot">
                <slot></slot>
            </ul>
        </li>
    </RouterLink>
</template>

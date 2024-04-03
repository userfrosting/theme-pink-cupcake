<script setup>
defineProps({
    url: {
        type: String,
        required: true
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
        <a :href="url">
            <span v-if="icon" :data-uk-icon="icon" class="uk-margin-small-right"></span>
            <font-awesome-icon v-if="faIcon" class="uk-margin-small-right" :icon="faIcon" />
            <slot>{{ label }}</slot>
        </a>
    </li>
</template>

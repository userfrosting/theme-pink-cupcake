<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
    to: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    }
})

const isExternalLink = computed(() => {
    return props.to === '' || (typeof props.to === 'string' && props.to.startsWith('http'))
})
</script>

<template>
    <li v-if="isExternalLink">
        <a
            class="uk-button uk-button-default uk-button-small uk-text-center"
            :href="to"
            target="_blank">
            <slot>{{ label }}</slot>
        </a>
    </li>
    <li v-else>
        <RouterLink :to="to" class="uk-button uk-button-default uk-button-small uk-text-center">
            <slot>{{ label }}</slot>
        </RouterLink>
    </li>
</template>

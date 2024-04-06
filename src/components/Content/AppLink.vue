<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
    to: {
        type: [String, Object],
        default: '#'
    },
    label: {
        type: String,
        default: ''
    }
})

const isExternalLink = computed(() => {
    return typeof props.to === 'string' && (props.to.startsWith('http') || props.to.startsWith('#'))
})
</script>

<template>
    <a v-if="isExternalLink" :href="to" target="_blank">
        <slot>{{ label }}</slot>
    </a>
    <RouterLink v-else :to="to">
        <slot>{{ label }}</slot>
    </RouterLink>
</template>

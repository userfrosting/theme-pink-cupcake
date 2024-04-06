<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
    href: {
        type: [String, Object],
        default: ''
    },
    label: {
        type: String,
        default: ''
    }
})

const isExternalLink = computed(() => {
    return typeof props.href === 'string' && props.href.startsWith('http')
})
</script>

<template>
    <a v-if="isExternalLink" :href="href" target="_blank">
        <slot>{{ label }}</slot>
    </a>
    <RouterLink v-else :to="href">
        <slot>{{ label }}</slot>
    </RouterLink>
</template>

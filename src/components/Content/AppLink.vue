<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const link = withDefaults(
    defineProps<{
        to: string
        label: string
    }>(),
    {
        to: '',
        label: ''
    }
)

const isExternalLink = computed(() => {
    return typeof link.to === 'string' && link.to.startsWith('http')
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

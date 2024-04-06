<script setup>
/**
 * Allow external + internal links in same component, plus add active class to 
 * li instead of a element
 * @see https://router.vuejs.org/guide/advanced/extending-router-link
 */
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
    <li v-if="isExternalLink">
        <a :href="to" target="_blank">
            <slot>{{ label }}</slot>
        </a>
    </li>
    <RouterLink v-else v-bind="$props" custom v-slot="{ isActive, href, navigate }">
        <li :class="{ 'uk-active': isActive }">
            <a v-bind="$attrs" :href="href" @click="navigate">
                <slot>{{ label }}</slot>
            </a>
        </li>
    </RouterLink>
</template>

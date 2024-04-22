<script setup lang="ts">
/**
 * Allow external + internal links in same component, plus add active class to
 * li instead of a element
 * @see https://router.vuejs.org/guide/advanced/extending-router-link
 */
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

export interface Props {
  to?: string | object
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  to: '',
  label: ''
})

const isExternalLink = computed(() => {
    return typeof props.to === 'string' && props.to.startsWith('http')
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

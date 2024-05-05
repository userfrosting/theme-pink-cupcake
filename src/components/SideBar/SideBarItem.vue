<script setup lang="ts">
/**
 * Allow external + internal links in same component, plus add active class to
 * li instead of a element
 * @see https://router.vuejs.org/guide/advanced/extending-router-link
 */
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = withDefaults(
    defineProps<{
        to: string
        label: string
        faIcon: string
        icon: string
    }>(),
    {
        to: '',
        label: '',
        faIcon: '',
        icon: ''
    }
)

const isExternalLink = computed(() => {
    return typeof props.to === 'string' && props.to.startsWith('http')
})
</script>

<template>
    <li v-if="isExternalLink">
        <a :href="to" target="_blank">
            <span v-if="icon" :data-uk-icon="icon" class="uk-margin-small-right"></span>
            <font-awesome-icon v-if="faIcon" class="uk-margin-small-right" :icon="faIcon" />
            <slot>{{ label }}</slot>
        </a>
    </li>
    <!-- @vue-ignore -->
    <RouterLink v-else v-bind="$props" custom v-slot="{ isExactActive, href, navigate }">
        <li :class="{ 'uk-active': isExactActive }">
            <a v-bind="$attrs" :href="href" @click="navigate">
                <span v-if="icon" :data-uk-icon="icon" class="uk-margin-small-right"></span>
                <font-awesome-icon v-if="faIcon" class="uk-margin-small-right" :icon="faIcon" />
                <slot>{{ label }}</slot>
            </a>
        </li>
    </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

withDefaults(
    defineProps<{
        to: string
        label: string
        faIcon: string
        icon: string
        hideCaret: boolean
    }>(),
    {
        to: '',
        label: '',
        faIcon: '',
        icon: '',
        hideCaret: false
    }
)
</script>

<template>
    <!-- @vue-ignore -->
    <RouterLink v-bind="$props" custom v-slot="{ isActive }">
        <li class="uk-parent" :class="{ 'uk-open': isActive }">
            <a v-bind="$attrs">
                <span v-if="icon" :data-uk-icon="icon" class="uk-margin-small-right"></span>
                <font-awesome-icon v-if="faIcon" class="uk-margin-small-right" :icon="faIcon" />
                <slot name="label">{{ label }}</slot>
                <span uk-nav-parent-icon v-if="!hideCaret"></span>
            </a>
            <ul class="uk-nav-sub">
                <slot></slot>
            </ul>
        </li>
    </RouterLink>
</template>

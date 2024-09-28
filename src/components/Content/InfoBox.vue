<script setup lang="ts">
// defineProps({
//     info1: String,
//     info2: String,
//     icon: String,
// })

import { RouterLink } from 'vue-router'

withDefaults(
    defineProps<{
        to?: string | { name: string }
        label?: string
        value?: string
        faIcon?: string
        icon?: string
    }>(),
    {
        to: '',
        label: '',
        value: '',
        faIcon: '',
        icon: ''
    }
)
</script>

<template>
    <div class="uk-card uk-card-default uk-card-body uk-card-small">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div v-if="icon || faIcon" class="uk-width-auto">
                <span
                    v-if="icon"
                    :data-uk-icon="'icon: '+icon+'; ratio: 2'"
                    class="uk-margin-small-right"></span>
                <font-awesome-icon v-if="faIcon" :icon="faIcon" size="2xl" fixed-width />
            </div>
            <div class="uk-width-expand">
                <h4 v-if="value" class="uk-margin-remove">{{ value }}</h4>
                <span v-if="label" class="uk-text-meta uk-text-uppercase">{{ label }}</span>
            </div>
        </div>
    </div>
</template>

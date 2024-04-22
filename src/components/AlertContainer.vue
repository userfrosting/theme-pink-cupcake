<script setup lang="ts">
import { AlertStyle } from '../types'

interface Alert {
    title?: string
    description?: string
    style?: AlertStyle
    closeBtn?: boolean
}

withDefaults(defineProps<Alert>(), {
    title: '',
    description: '',
    style: AlertStyle.Primary,
    closeBtn: false
})

// withDefaults(defineProps<{
//     alert: Alert
// }>(), {
//     alert: () => 
//     {
//         return {
//             title: '',
//             description: '',
//             style: AlertStyle.Primary,
//             closeBtn: false,
//         }
//     },
// })
</script>

<template>
    <div :class="style" uk-alert>
        <a v-if="closeBtn" class="uk-alert-close" uk-close @click="$emit('close')"></a>
        <h3 v-if="title">{{ title }}</h3>
        <p>
            <slot>{{ description }}</slot>
        </p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { type AlertInterface, AlertStyle } from '@userfrosting/sprinkle-account/types'

/**
 * N.B.: This component uses a complex prop type instead of individual props
 * because the common use case for it is to display an alert from an API.
 * Using a single object makes it easier to pass data from the API.
 *
 * @see https://vuejs.org/guide/typescript/composition-api#complex-prop-types
 */
const props = defineProps<{
    alert: AlertInterface
}>()

/**
 * Defines style class to use
 */
const alertClass = computed(() => {
    switch (props.alert.style) {
        case AlertStyle.Success: {
            return 'uk-alert-success'
        }
        case AlertStyle.Warning: {
            return 'uk-alert-warning'
        }
        case AlertStyle.Danger: {
            return 'uk-alert-danger'
        }
        case AlertStyle.Primary:
        default: {
            return 'uk-alert-primary'
        }
    }
})

const iconClass = computed(() => {
    switch (props.alert.style) {
        case AlertStyle.Success: {
            return 'fa-solid fa-circle-check'
        }
        case AlertStyle.Warning: {
            return 'fa-solid fa-circle-exclamation'
        }
        case AlertStyle.Danger: {
            return 'fa-solid fa-triangle-exclamation'
        }
        case AlertStyle.Primary:
        default: {
            return 'fa-solid fa-circle-info'
        }
    }
})

/**
 * TODO : Closing an alert using the button will remove the HTML from the DOM.
 * This means the component can't be reused with a different variable. If used
 * in a collection of alerts, it won't be removed from the collection.
 */
</script>

<template>
    <div :class="alertClass" class="uk-alert" uk-alert>
        <a v-if="alert.closeBtn" class="uk-alert-close" uk-close @click="$emit('close')"></a>
        <h3 v-if="alert.title">
            <font-awesome-icon v-if="!alert.hideIcon" :icon="iconClass" class="uk-icon" />
            {{ alert.title }}
        </h3>
        <p v-if="$slots.default">
            <slot></slot>
        </p>
        <p v-else-if="alert.description" v-html="alert.description"></p>
    </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { useSprunjer } from '@userfrosting/sprinkle-core/sprunjer'
import SprunjePaginator from './SprunjePaginator.vue'

// interface AssociativeArray {
//     [key: string]: string;
// }

const props = defineProps({
    dataUrl: {
        type: String,
        required: true
    },
    hidePagination: {
        type: Boolean,
        default: false
    },
    // TODO : Add type AssociativeArray
    defaultSorts: {
        default: {}
    },
    defaultFilters: {
        default: {}
    },
    defaultSize: Number,
    defaultPage: Number
})

const sprunjer = useSprunjer(
    props.dataUrl,
    props.defaultSorts,
    props.defaultFilters,
    props.defaultSize,
    props.defaultPage
)
const { rows } = sprunjer

provide('sprunjer', sprunjer)
</script>

<template>
    <slot name="actions"></slot>
    <table class="uk-table uk-table-striped uk-table-small">
        <thead>
            <tr>
                <slot name="header"></slot>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in rows" :key="row.id">
                <slot name="body" :item="row"></slot>
            </tr>
        </tbody>
    </table>
    <slot v-if="!hidePagination" name="paginator">
        <SprunjePaginator />
    </slot>
</template>

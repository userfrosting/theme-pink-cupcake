<script setup lang="ts">
import { provide } from 'vue'
import { useSprunjer } from '@userfrosting/sprinkle-core/sprunjer'
import SprunjePaginator from './SprunjePaginator.vue'

const {
    dataUrl,
    hidePagination = false,
    defaultSorts = {},
    defaultFilters = {},
    defaultSize = 10,
    defaultPage = 0
} = defineProps<{
    dataUrl: string
    hidePagination?: boolean
    defaultSorts?: { [key: string]: string }
    defaultFilters?: { [key: string]: string }
    defaultSize?: number
    defaultPage?: number
}>()

const sprunjer = useSprunjer(dataUrl, defaultSorts, defaultFilters, defaultSize, defaultPage)
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

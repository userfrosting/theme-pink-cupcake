<script setup lang="ts">
import { provide } from 'vue'
import { useSprunjer } from '@userfrosting/sprinkle-core/sprunjer'
import SprunjePaginator from './SprunjePaginator.vue'
import SprunjeSearch from './SprunjeSearch.vue'

const {
    dataUrl,
    hidePagination = false,
    defaultSorts = {},
    defaultFilters = {},
    defaultSize = 10,
    defaultPage = 0,
    searchColumn = null
} = defineProps<{
    dataUrl: string
    hidePagination?: boolean
    defaultSorts?: { [key: string]: string }
    defaultFilters?: { [key: string]: string }
    defaultSize?: number
    defaultPage?: number
    searchColumn?: string
}>()

const sprunjer = useSprunjer(() => dataUrl, defaultSorts, defaultFilters, defaultSize, defaultPage)
const { rows } = sprunjer

provide('sprunjer', sprunjer)
</script>

<template>
    <div uk-grid class="uk-child-width-1-2">
        <div class="uk-text-left">
            <slot name="actions"></slot>
        </div>
        <div class="uk-text-right">
            <slot name="filters">
                <SprunjeSearch v-if="searchColumn" :column="searchColumn" />
                <!-- <SprunjeFilter /> -->
            </slot>
        </div>
    </div>
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

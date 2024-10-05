<script setup lang="ts">
import { useSprunjer } from '@userfrosting/sprinkle-core/sprunjer'
import SprunjePaginator from './SprunjePaginator.vue'

const props = defineProps({
    dataUrl: {
        type: String,
        required: true
    },
    hidePagination: {
        type: Boolean,
        default: false
    }
})

const sprunjer = useSprunjer(props.dataUrl)
const { rows, fetch, loading } = sprunjer

defineExpose({ sprunjer })
</script>

<template>
    <slot name="actions" :sprunjer="{ fetch, loading }"></slot>
    <table class="uk-table uk-table-striped">
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
        <SprunjePaginator :sprunjer="sprunjer" />
    </slot>
</template>

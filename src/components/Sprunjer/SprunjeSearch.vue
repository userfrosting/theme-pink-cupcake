<script setup lang="ts">
import type { Sprunjer } from '@userfrosting/sprinkle-core/sprunjer'
import { inject, ref, watch } from 'vue'

const props = defineProps({
    column: {
        type: String,
        required: true
    }
})

const filterValue = ref('')
const sprunjer = inject('sprunjer') as Sprunjer
const { filters } = sprunjer

watch(filterValue, () => {
    filters.value[props.column] = filterValue.value
})
</script>

<template>
    <div class="uk-search uk-search-default" v-if="column">
        <input
            class="uk-search-input uk-form-small"
            type="search"
            :placeholder="'Search ' + column + '...'"
            aria-label="Search"
            v-model="filterValue" />
        <span class="uk-search-icon-flip" uk-search-icon></span>
    </div>
</template>

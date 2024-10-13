<script setup lang="ts">
import type { Sprunjer } from '@userfrosting/sprinkle-core/sprunjer'
import { inject, computed } from 'vue'

const sprunjer = inject('sprunjer') as Sprunjer
const { data, filters } = sprunjer

const filterable = computed(() => {
    return data.value.filterable
})

const resetFilters = () => {
    filters.value = {}
}
</script>

<template>
    <h3 class="uk-heading-divider">Filters</h3>
    <dl class="uk-description-list" v-for="(column, index) in filterable" :key="index">
        <dt>{{ column }}</dt>
        <dd>
            <input class="uk-input" type="text" :placeholder="column" v-model="filters[column]" />
        </dd>
    </dl>
    <button class="uk-button uk-button-default uk-button-small" @click="resetFilters">
        <font-awesome-icon icon="xmark" fixed-width /> Clear filters
    </button>
</template>

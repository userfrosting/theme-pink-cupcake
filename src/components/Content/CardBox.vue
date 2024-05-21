<script setup lang="ts">
defineProps({
    title: String
})
</script>

<template>
    <div class="uk-card uk-card-default uk-card-small">
        <div v-if="title" class="uk-card-header">
            <div class="uk-grid uk-grid-small">
                <div class="uk-width-auto">
                    <h4>{{ title }}</h4>
                </div>
            </div>
        </div>
        <div class="uk-card-body">
            <slot></slot>
        </div>
    </div>
</template>

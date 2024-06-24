<script setup>
defineProps({
    title: String
})
</script>

<template>
    <div class="uk-card uk-card-default uk-card-small">
        <div v-if="title" class="uk-card-header">
            <div class="uk-grid uk-grid-small">
                <div class="uk-width-auto">
                    <h4 data-test="title">{{ title }}</h4>
                </div>
            </div>
        </div>
        <div class="uk-card-body" data-test="slot">
            <slot></slot>
        </div>
    </div>
</template>

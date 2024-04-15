<script setup lang="ts">
interface Alert {
    title: string
    description: string
}

defineProps<Alert>()
</script>

<template>
    <div class="uk-alert-danger" uk-alert>
        <a class="uk-alert-close" uk-close></a>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
    </div>
</template>

<script setup>
defineProps({
    label: {
        type: String,
        required: true
    }
})
</script>

<template>
    <li class="uk-nav-header">{{ label }}</li>
</template>

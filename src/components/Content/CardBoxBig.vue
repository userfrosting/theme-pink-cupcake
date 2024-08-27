<script setup>
defineProps({
    title: String
})
</script>

<template>
    <div class="uk-flex uk-flex-center uk-flex-middle">
        <div class="uk-width-1-1@s uk-width-3-5@l uk-width-1-3@xl">
            <UFCardBox :title="title">
                <slot />
            </UFCardBox>
        </div>
    </div>
</template>

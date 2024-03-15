<script setup>
defineProps({
    label: {
        type: String,
        required: true
    }
})
</script>

<template>
    <li>
        <a href="#">{{ label }} <span uk-navbar-parent-icon></span></a>
        <div class="uk-navbar-dropdown" uk-dropdown="offset: 0">
            <ul class="uk-nav uk-navbar-dropdown-nav">
                <slot></slot>
            </ul>
        </div>
    </li>
</template>

<script setup lang="ts">
export interface Props {
  label?: string
}

withDefaults(defineProps<Props>(), {
  label: ''
})
</script>

<template>
    <li>
        <a>
            <slot name="label">{{ label }}</slot> <span uk-navbar-parent-icon></span>
        </a>
        <div class="uk-navbar-dropdown" uk-dropdown="offset: 0">
            <ul class="uk-nav uk-navbar-dropdown-nav">
                <slot></slot>
            </ul>
        </div>
    </li>
</template>

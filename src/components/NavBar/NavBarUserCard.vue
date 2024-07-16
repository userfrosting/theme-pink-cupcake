<script setup lang="ts">
import NavBarDropdown from './NavBarDropdown.vue'

export interface Props {
    username?: string
    avatar?: string
    meta?: string
}

withDefaults(defineProps<Props>(), {
    username: '',
    avatar: '',
    meta: ''
})
</script>

<template>
    <NavBarDropdown class="uf-nav-user uk-text-center">
        <template #label>
            {{ username }}
            <img v-if="avatar" :src="avatar" alt="avatar" class="uk-border-circle" />
        </template>
        <div class="uk-margin">
            <img
                v-if="avatar"
                :src="avatar"
                alt="avatar"
                class="uk-border-circle"
                uk-height-match />
            <p class="uk-margin-remove" v-if="username">{{ username }}</p>
            <p class="uk-margin-remove uk-text-meta" v-if="meta">({{ meta }})</p>
        </div>
        <slot></slot>
    </NavBarDropdown>
</template>

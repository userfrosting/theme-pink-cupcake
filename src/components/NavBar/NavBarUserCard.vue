<script setup>
defineProps({
    username: {
        type: String,
        default: ''
    },
    avatar: {
        type: String,
        default: ''
    },
    meta: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <li class="uf-nav-user">
        <a>
            {{ username }}
            <img v-if="avatar" :src="avatar" alt="avatar" class="uk-border-circle" />
        </a>
        <div class="uk-navbar-dropdown" uk-dropdown="offset: 0">
            <ul class="uk-nav uk-navbar-dropdown-nav">
                <div class="uk-card uk-card-body uk-text-center">
                    <img
                        v-if="avatar"
                        :src="avatar"
                        alt="avatar"
                        class="uk-border-circle"
                        uk-height-match />
                    <p v-if="username">{{ username }}</p>
                    <p class="uk-text-meta" v-if="meta">({{ meta }})</p>
                </div>
                <slot></slot>
            </ul>
        </div>
    </li>
</template>

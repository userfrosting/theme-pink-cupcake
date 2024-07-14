<script setup lang="ts">
import FormLogin from '../Forms/FormLogin.vue'
</script>

<template>
    <li class="uf-nav-user">
        <a>Login <span uk-navbar-parent-icon></span></a>
        <div class="uk-navbar-dropdown" uk-dropdown="offset: 0">
            <ul class="uk-nav uk-navbar-dropdown-nav">
                <FormLogin />
            </ul>
        </div>
    </li>
</template>

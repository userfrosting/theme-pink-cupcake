<script setup lang="ts">
import FormLogin from '../components/Content/FormLogin.vue'
</script>

<template>
    <UFCardBoxBig>
        <h3 class="uk-card-title">Login</h3>
        <FormLogin />
        <hr />
        <div class="uk-text-center">
            <p>You don't have an account yet?</p>
            <button class="uk-button uk-button-default">
                <font-awesome-icon :icon="['fas', 'user-plus']" /> Register
            </button>
        </div>
    </UFCardBoxBig>
</template>

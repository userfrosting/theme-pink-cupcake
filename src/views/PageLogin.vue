<script setup lang="ts">
import FormLogin from '../components/Content/FormLogin.vue'
</script>

<template>
    <div class="uk-flex uk-flex-center uk-flex-middle">
        <div class="uk-width-1-1@s uk-width-3-5@l uk-width-1-3@xl">
            <UFCardBox>
                <h3 class="uk-card-title">Login</h3>
                <FormLogin />
                <hr />
                <div class="uk-text-center">
                    <p>You don't have an account yet?</p>
                    <button class="uk-button uk-button-default">
                        <font-awesome-icon :icon="['fas', 'user-plus']" /> Register
                    </button>
                </div>
            </UFCardBox>
        </div>
    </div>
</template>

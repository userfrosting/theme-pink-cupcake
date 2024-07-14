<script setup>
import FormLogin from '../components/Forms/FormLogin.vue'
</script>

<template>
    <div class="uk-flex uk-flex-center uk-flex-middle">
        <div class="uk-width-1-1@s uk-width-3-5@l uk-width-1-3@xl">
            <UFCardBox>
                <FormLogin />
                <hr />
                <div class="uk-text-center">
                    <p>You don't have an account yet?</p>
                    <button class="uk-button uk-button-default">
                        Register
                    </button>
                </div>
            </UFCardBox>
        </div>
    </div>
</template>

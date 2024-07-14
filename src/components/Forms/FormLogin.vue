<script setup lang="ts">
import type { LoginForm } from '@userfrosting/sprinkle-account/types'
import { useAuthStore } from '@userfrosting/sprinkle-account/stores'
import AlertContainer from '../AlertContainer.vue'

// Form variables
let form: LoginForm = {
    user_name: '',
    password: ''
}

const auth = useAuthStore()
</script>

<template>
    <form>
        <fieldset class="uk-fieldset">
            <legend class="uk-legend">Login</legend>
            <AlertContainer v-if="auth.error" :alert="auth.error" />
            <div class="uk-margin">
                <div class="uk-inline">
                    <span class="uk-form-icon" uk-icon="icon: user"></span>
                    <input class="uk-input uk-form-width-large" type="text" placeholder="Username" aria-label="Username" v-model="form.user_name">
                </div>
            </div>
            <div class="uk-margin">
                <div class="uk-inline">
                    <span class="uk-form-icon" uk-icon="icon: lock"></span>
                    <input class="uk-input uk-form-width-large" type="password" placeholder="Password" aria-label="Password" v-model="form.password" />
                </div>
            </div>
            <p><a>Forgot your password?</a></p>
            <div class="uk-text-center">
                <button
                    class="uk-button uk-button-primary"
                    @click="auth.login(form)"
                    :disabled="auth.loading">
                    Login
                </button>
            </div>
        </fieldset>
    </form>
</template>

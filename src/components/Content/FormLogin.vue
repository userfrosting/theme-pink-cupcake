<script setup lang="ts">
import { ref } from 'vue'
import UIkit from 'uikit'
import type { AlertInterface } from '@userfrosting/sprinkle-core/types'
import type { LoginForm } from '@userfrosting/sprinkle-account/types'
import { useAuthStore } from '@userfrosting/sprinkle-account/stores'

// Variables
const loading = ref(false)
const error = ref<AlertInterface | null>()
let form: LoginForm = {
    user_name: '',
    password: ''
}

// Form action
async function sendLogin() {
    loading.value = true
    error.value = null
    const auth = useAuthStore()
    await auth
        .login(form)
        .then((user) => {
            UIkit.notification({
                message: 'Welcome back ' + user?.full_name + '!',
                status: 'success',
                pos: 'bottom-right',
                timeout: 4000
            })
        })
        .catch((err) => {
            error.value = err
        })
        .finally(() => {
            loading.value = false
        })
}
</script>

<template>
    <form v-on:submit.prevent="sendLogin()">
        <fieldset class="uk-fieldset">
            <UFAlertContainer data-test="error" v-if="error" :alert="error" />
            <div class="uk-margin">
                <div class="uk-inline uk-width-1-1">
                    <span class="uk-form-icon" uk-icon="icon: user"></span>
                    <input
                        class="uk-input"
                        type="text"
                        placeholder="Username"
                        aria-label="Username"
                        data-test="username"
                        v-model="form.user_name" />
                </div>
            </div>
            <div class="uk-margin">
                <div class="uk-inline uk-width-1-1">
                    <span class="uk-form-icon" uk-icon="icon: lock"></span>
                    <input
                        class="uk-input"
                        type="password"
                        placeholder="Password"
                        aria-label="Password"
                        data-test="password"
                        v-model="form.password" />
                </div>
            </div>
            <div class="uk-text-center">
                <button class="uk-button uk-button-primary" :disabled="loading" data-test="submit">
                    Login
                </button>
            </div>
        </fieldset>
    </form>
</template>

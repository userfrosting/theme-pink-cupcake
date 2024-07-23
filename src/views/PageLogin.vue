<script setup lang="ts">
import { watch, ref } from 'vue'
import { useRouter } from 'vue-router'
import UIkit from 'uikit'
import type { AlertInterface, LoginForm } from '@userfrosting/sprinkle-account/types'
import { useAuthStore } from '@userfrosting/sprinkle-account/stores'

// Variables
const loading = ref(false)
const error = ref<AlertInterface | null>()
let form: LoginForm = {
    user_name: '',
    password: ''
}

// Stores
const auth = useAuthStore()
const router = useRouter()

// Watch for redirect
// TODO : Replace route guard with initial state check
// TODO : Should be moved to a composable or auth store, as this will be useful in other places,
// TODO : Should also use query redirect (to redirect where we were before login)
// @see : https://vue-auth3.js.org/guide/auth-meta.html#advanced-redirects
watch(
    () => auth.isAuthenticated,
    (isAuthenticated) => {
        if (isAuthenticated === true) {
            let redirectTo = router.currentRoute.value.meta.redirectAfterLogin ?? '/'
            router.push(redirectTo)
        }
    }
)

// Form action
function sendLogin() {
    loading.value = true
    error.value = null
    auth.login(form)
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
    <div class="uk-flex uk-flex-center uk-flex-middle">
        <div class="uk-width-1-1@s uk-width-3-5@l uk-width-1-3@xl">
            <UFCardBox>
                <h3 class="uk-card-title">Login</h3>
                <form v-on:submit.prevent="sendLogin()">
                    <fieldset class="uk-fieldset">
                        <UFAlertContainer v-if="error" :alert="error" />
                        <div class="uk-margin">
                            <div class="uk-inline">
                                <span class="uk-form-icon" uk-icon="icon: user"></span>
                                <input
                                    class="uk-input uk-form-width-large"
                                    type="text"
                                    placeholder="Username"
                                    aria-label="Username"
                                    v-model="form.user_name" />
                            </div>
                        </div>
                        <div class="uk-margin">
                            <div class="uk-inline">
                                <span class="uk-form-icon" uk-icon="icon: lock"></span>
                                <input
                                    class="uk-input uk-form-width-large"
                                    type="password"
                                    placeholder="Password"
                                    aria-label="Password"
                                    v-model="form.password" />
                            </div>
                        </div>
                        <p><a>Forgot your password?</a></p>
                        <div class="uk-text-center">
                            <button class="uk-button uk-button-primary" :disabled="loading">
                                Login
                            </button>
                        </div>
                    </fieldset>
                </form>
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

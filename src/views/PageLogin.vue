<script setup lang="ts">
import type { LoginForm } from '@userfrosting/sprinkle-account/types'
import { useAuthStore } from '@userfrosting/sprinkle-account/stores'
import AlertContainer from '../components/AlertContainer.vue'

// Form variables
let form: LoginForm = {
    user_name: '',
    password: ''
}

const auth = useAuthStore()
</script>

<template>
    <div class="uk-flex uk-flex-center uk-flex-middle">
        <div class="uk-width-1-1@s uk-width-3-5@l uk-width-1-3@xl">
            <UFCardBox>
                <h3 class="uk-card-title">Login</h3>
                <form>
                    <fieldset class="uk-fieldset">
                        <AlertContainer v-if="auth.error" :alert="auth.error" />
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
                            <button
                                class="uk-button uk-button-primary"
                                @click="auth.login(form)"
                                :disabled="auth.loading">
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

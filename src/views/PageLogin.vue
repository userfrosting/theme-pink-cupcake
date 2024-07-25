<script setup lang="ts">
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@userfrosting/sprinkle-account/stores'
import FormLogin from '../components/Content/FormLogin.vue'

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

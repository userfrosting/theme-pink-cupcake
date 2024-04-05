<script setup>
import { DynamicLink } from '../Content'

defineProps({
    to: {
        type: [String, Object],
        default: '/'
    },
    href: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <header>
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            <div class="uk-navbar-container">
                <div class="uk-container uk-container-expand">
                    <nav class="uk-navbar" uk-navbar>
                        <div class="uk-navbar-left">
                            <DynamicLink :href="href" :to="to" class="uk-navbar-item uk-logo">
                                <slot name="title">{{ title }}</slot>
                            </DynamicLink>
                        </div>
                        <div class="uk-navbar-right">
                            <ul class="uk-navbar-nav">
                                <slot></slot>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

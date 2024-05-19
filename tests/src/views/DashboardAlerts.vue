<script setup lang="ts">
import { reactive, ref } from 'vue'
import LayoutDashboard from '../layouts/LayoutDashboard.vue'
import { type AlertInterface, AlertStyle } from '@userfrosting/theme-pink-cupcake/types'
import { AlertContainer } from '@userfrosting/theme-pink-cupcake/components'

// Array container for alerts collection
const alerts: Array<AlertInterface> = reactive([])

// Dynamic alert
const dynamicAlert = ref<AlertInterface>()

// Normal use
alerts.push({ title: 'Primary (default)', description: 'Lorem Ipsum', style: AlertStyle.Primary })
alerts.push({ title: 'Success', description: 'Lorem Ipsum', style: AlertStyle.Success })
alerts.push({ title: 'Warning', description: 'Lorem Ipsum', style: AlertStyle.Warning })
alerts.push({ title: 'Danger', description: 'Lorem Ipsum', style: AlertStyle.Danger })

// String style 
alerts.push({ title: 'String Primary', description: 'Lorem Ipsum', style: 'Primary' })
alerts.push({ title: 'String Success', description: 'Lorem Ipsum', style: 'Success' })
alerts.push({ title: 'String Warning', description: 'Lorem Ipsum', style: 'Warning' })
alerts.push({ title: 'String Danger', description: 'Lorem Ipsum', style: 'Danger' })

// @ts-ignore This is explicitly wrong for testing
alerts.push({ title: 'String Default / Non-Exist', description: 'Lorem Ipsum', style: 'Foo' })

// Test each defaults
alerts.push({ title: 'No Style', description: 'Lorem Ipsum' })
alerts.push({ title: 'No Description' })
alerts.push({ description: 'Lorem Ipsum (No Title)' })
alerts.push({ title: 'With Description and close Button', description: 'Lorem Ipsum', closeBtn: true })
alerts.push({ description: 'Alert with close button and no title', closeBtn: true })
alerts.push({ title: 'Alert with no description, but close button', closeBtn: true })

// Simple var for testing 
const myAlert: AlertInterface = {
    title: 'Alert from Var',
    description: 'This is the description',
    style: AlertStyle.Warning
}

/**
 * Reaction for button press
 */
function addAlert() {
    alerts.push({ title: 'Success', description: 'Added alerts', style: AlertStyle.Success, closeBtn: true })
}
function removeAlert() {
    alerts.splice(0, 1)
}

/**
 * Remove all alerts from the collection
 */
function deleteAlerts() {
    alerts.splice(0, alerts.length)
}

/**
 * Reaction for close event
 */
function alertClosed() {
    alert('The alert will be closed')
}

/**
 * Dynamic alert actions
 * N.B.: Such a dynamic alert should not have a close button, as it will remove 
 * the html from the DOM. An array to store a collection of alerts if preferred 
 * in this case.
 */
function successAlert() {
    dynamicAlert.value = { title: 'Success', description: 'Action was successful !', style: AlertStyle.Success }
}
function errorAlert() {
    dynamicAlert.value = { title: 'Error', description: 'Action was not so successful !', style: AlertStyle.Danger }
}
function dismissAlert() {
    dynamicAlert.value = undefined
}
</script>

<template>
    <LayoutDashboard>

        <h2>Dynamic alert</h2>
        <button class="uk-button uk-button-primary uk-button-small" @click="successAlert()">Success</button>
        <button class="uk-button uk-button-danger uk-button-small uk-margin-small-left" @click="errorAlert()">Error</button>
        <button class="uk-button uk-button-default uk-button-small uk-margin-small-left" @click="dismissAlert()">Clear</button>
        <AlertContainer v-if="dynamicAlert" :alert="dynamicAlert" />

        <h2>Dynamic alert Collection</h2>
        <div class="uk-button-group">
            <button class="uk-button uk-button-default uk-button-small" @click="removeAlert()">-</button>
            <button class="uk-button uk-button-default uk-button-small" @click="deleteAlerts()">Clear all</button>
            <button class="uk-button uk-button-default uk-button-small" @click="addAlert()">+</button>
        </div>
        <template v-for="alert in alerts" :key="alert.id">
            <AlertContainer :alert="alert" />
        </template>
        <hr />

        <h2>Alerts objects</h2>
        <AlertContainer :alert="myAlert" />
        <AlertContainer :alert="{ title: 'AlertContainer' }" />
        <AlertContainer :alert="{ title: 'AlertContainer', description: 'With Description' }" />
        <AlertContainer
            :alert="{ title: 'AlertContainer', description: 'With Description and style', style: 'Danger' }" />
        <AlertContainer
            :alert="{ title: 'AlertContainer', description: 'With Description and style (object)', style: AlertStyle.Danger }" />
        <AlertContainer
            :alert="{ title: 'AlertContainer', description: 'With Description and close button', style: 'Success', closeBtn: true }" />
        <AlertContainer :alert="{ title: 'Alert description as slot' }">
            <font-awesome-icon icon="triangle-exclamation" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            <font-awesome-icon icon="triangle-exclamation" />
        </AlertContainer>
        <AlertContainer :alert="{ title: 'Alert with both description', description: 'Description not used' }">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </AlertContainer>
        <AlertContainer
            :alert="{ title: 'Close button action', description: 'Lorem Ipsum', style: AlertStyle.Danger, closeBtn: true }"
            @close="alertClosed()" />
        <hr />

        <h2>Global Component</h2>
        <UFAlertContainer
            :alert="{ title: 'UFAlertContainer', description: 'This alert is created using the global component registration' }" />
    </LayoutDashboard>
</template>

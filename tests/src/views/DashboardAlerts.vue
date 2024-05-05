<script setup lang="ts">
import LayoutDashboard from '../layouts/LayoutDashboard.vue'
import { AlertStyle } from '@userfrosting/theme-pink-cupcake/types'
import { AlertContainer } from '@userfrosting/theme-pink-cupcake/components'

function displayAlert() {
    alert('The alert will be closed')
}
</script>

<template>
    <LayoutDashboard>
        <AlertContainer title="Primary" description="Lorem Ipsum" :style="AlertStyle.Primary" />
        <AlertContainer title="Success" description="Lorem Ipsum" :style="AlertStyle.Success" />
        <AlertContainer title="Warning" description="Lorem Ipsum" :style="AlertStyle.Warning" />
        <AlertContainer title="Danger" description="Lorem Ipsum" :style="AlertStyle.Danger" />
        <hr />
        <AlertContainer
            description="Alert with all defaults (No title, no style, no close button)" />
        <AlertContainer title="Title" description="Alert with close button and title" close-btn />
        <AlertContainer description="Alert with close button and no title" close-btn />
        <AlertContainer title="Alert with no description" close-btn />
        <AlertContainer title="Alert description as slot">
            <font-awesome-icon icon="triangle-exclamation" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            <font-awesome-icon icon="triangle-exclamation" />
        </AlertContainer>
        <AlertContainer title="Alert with both description" description="Description not used">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </AlertContainer>
        <AlertContainer
            title="Close button action"
            description="Lorem Ipsum"
            :style="AlertStyle.Danger"
            close-btn
            @close="displayAlert()" />
        <hr />
        <UFAlertContainer
            title="UFAlertContainer"
            description="This alert is created using the global component registration" />
    </LayoutDashboard>
</template>

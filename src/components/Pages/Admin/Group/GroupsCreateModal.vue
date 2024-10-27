<script setup lang="ts">
import { inject } from 'vue'
import UIkit from 'uikit'
import type { Sprunjer } from '@userfrosting/sprinkle-core/sprunjer'
import type { GroupCreateResponse } from '@userfrosting/sprinkle-admin/composable/useGroupCreateApi'
import { useGroupCreateApi } from '@userfrosting/sprinkle-admin/composable/useGroupCreateApi'

// Variables
const sprunjer = inject('sprunjer') as Sprunjer
const { formData, sendForm, resetForm, loadingState, formError } = useGroupCreateApi()

/**
 * TODO :
 *  1. Form validation
 *  2. Slug suggest
 */

// Form action
async function submitForm() {
    await sendForm()
        .then((response: GroupCreateResponse) => {
            // Refresh Sprunje data
            sprunjer.fetch()

            // Display notification
            UIkit.notification({
                message: response.message,
                status: 'success',
                pos: 'bottom-right',
                timeout: 4000
            })

            // Close modal
            closeModal()
        })
        .catch(() => {})
}

const closeModal = () => {
    resetForm()
    UIkit.modal('#group-create-form').hide()
}
</script>

<template>
    <button
        class="uk-button uk-button-default"
        type="button"
        uk-toggle="target: #group-create-form">
        <font-awesome-icon icon="plus" fixed-width /> Create Group
    </button>

    <!-- This is the modal -->
    <div id="group-create-form" uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
            <button class="uk-modal-close-default" type="button" uk-close></button>
            <h3 class="uk-modal-title">Create Group</h3>
            <form v-on:submit.prevent="submitForm()">
                <fieldset class="uk-fieldset uk-form-stacked">
                    <UFAlert data-test="error" v-if="formError" :alert="formError" />

                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">Group name</label>
                        <div class="uk-inline uk-width-1-1">
                            <font-awesome-icon
                                class="fa-form-icon"
                                icon="pen-to-square"
                                fixed-width />
                            <input
                                class="uk-input"
                                type="text"
                                placeholder="Please enter a name for the group"
                                aria-label="Group Name"
                                data-test="name"
                                v-model="formData.name" />
                        </div>
                    </div>

                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">Slug</label>
                        <!-- <span class="pull-right"><a href="#" id="form-register-username-suggest">[{{translate('SUGGEST')}}]</a></span> -->
                        <div class="uk-inline uk-width-1-1">
                            <font-awesome-icon class="fa-form-icon" icon="tag" fixed-width />
                            <input
                                class="uk-input"
                                type="text"
                                placeholder="Group Slug"
                                aria-label="Group Slug"
                                data-test="slug"
                                v-model="formData.slug" />
                        </div>
                    </div>

                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">Group Icon</label>
                        <div class="uk-inline uk-width-1-1">
                            <font-awesome-icon
                                class="fa-form-icon"
                                :icon="formData.icon"
                                fixed-width />
                            <input
                                class="uk-input"
                                type="text"
                                placeholder="Icon for group members"
                                aria-label="Group Icon"
                                data-test="icon"
                                v-model="formData.icon" />
                        </div>
                    </div>

                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">Description</label>
                        <textarea
                            class="uk-textarea"
                            placeholder="Group Description"
                            aria-label="Description"
                            data-test="description"
                            rows="6"
                            v-model="formData.description" />
                    </div>

                    <div class="uk-text-right" uk-margin>
                        <button
                            class="uk-button uk-button-default"
                            type="button"
                            @click="closeModal()">
                            Cancel
                        </button>
                        <button
                            class="uk-button uk-button-primary"
                            type="submit"
                            :disabled="loadingState === true">
                            Save
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import UIkit from 'uikit'
import { defineEmits } from 'vue'
import { useGroupDeleteApi } from '@userfrosting/sprinkle-admin/composable/useGroupDeleteApi'
import type { GroupInterface } from '@userfrosting/sprinkle-account/types'
import { Severity } from '@userfrosting/sprinkle-core/types'

// Variables
const { deleteGroup } = useGroupDeleteApi()

// Props
const props = defineProps<{
    group: GroupInterface
}>()

// Emits
const emits = defineEmits(['deleted'])

// Methods
const deleteConfirmed = () => {
    deleteGroup(props.group.slug)
        .then((response) => {
            emits('deleted')
            UIkit.notification({
                message: response.message,
                status: 'success',
                pos: 'top-right',
                timeout: 4000
            })
        })
        .catch((error) => {
            UIkit.notification({
                message: error.description,
                status: 'danger',
                pos: 'top-right',
                timeout: 4000
            })
        })
}
</script>

<template>
    <button
        class="uk-button uk-button-danger uk-button-small"
        v-bind="$attrs"
        type="button"
        :uk-toggle="'target: #confirm-group-delete-' + props.group.slug">
        <slot>
            <font-awesome-icon icon="trash" fixed-width />
        </slot>
    </button>

    <!-- This is the modal -->
    <UFModalConfirmation
        :id="'confirm-group-delete-' + props.group.slug"
        title="Delete Group ?"
        @confirmed="deleteConfirmed()"
        acceptLabel="Yes, Delete Group"
        acceptIcon="trash"
        :rejectIcon="null"
        :acceptSeverity="Severity.Danger">
        <template #prompt>
            Are you sure you want to delete the <strong>{{ props.group.name }}</strong> group?
        </template>
    </UFModalConfirmation>
</template>

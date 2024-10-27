<script setup lang="ts">
import { inject } from 'vue'
import type { Sprunjer } from '@userfrosting/sprinkle-core/sprunjer'
import { useGroupDeleteModal } from '@/composable/useGroupDeleteModal'

// Variables
const sprunjer = inject('sprunjer') as Sprunjer
const { confirmDeleteGroup } = useGroupDeleteModal()

// Props
const props = defineProps<{
    groupSlug: string
}>()
</script>

<template>
    <button
        class="uk-button uk-button-danger uk-button-small"
        type="button"
        @click="
            confirmDeleteGroup(props.groupSlug).then(() => {
                sprunjer.fetch()
            })
        ">
        <font-awesome-icon icon="trash" fixed-width />
    </button>
</template>

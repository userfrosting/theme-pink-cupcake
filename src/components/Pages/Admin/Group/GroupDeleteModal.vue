<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useGroupDeleteModal } from '@/composable/useGroupDeleteModal'

// Variables
const router = useRouter()
const { confirmDeleteGroup } = useGroupDeleteModal()

// Props
const props = defineProps<{
    groupSlug: string
}>()
</script>

<template>
    <button
        class="uk-button uk-button-danger uk-width-1-1 uk-margin-small-bottom uk-button-small"
        type="button"
        @click="
            confirmDeleteGroup(props.groupSlug).then(() => {
                router.push({ name: 'admin.groups' })
            })
        ">
        Delete Group
    </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import type { GroupApi } from '@userfrosting/sprinkle-admin/composable/useGroupApi'
import GroupDeleteModal from '@/components/Pages/Admin/Group/GroupDeleteModal.vue'

const router = useRouter()
const { group } = defineProps<{
    group: GroupApi
}>()
</script>

<template>
    <UFCardBox>
        <div class="uk-text-center">
            <font-awesome-icon v-if="group.icon" :icon="group.icon" class="fa-5x" />
        </div>
        <h3 class="uk-text-center uk-margin-remove">{{ group.name }}</h3>
        <p class="uk-text-meta">
            {{ group.description }}
        </p>
        <hr />
        <!-- TODO : Find a way to slot the description list -->
        <dl class="uk-description-list">
            <dt><font-awesome-icon icon="users" /> Users</dt>
            <dd>
                <span class="uk-badge">{{ group.users_count }}</span>
            </dd>
        </dl>
        <hr />
        <button
            class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom uk-button-small">
            Edit Group
        </button>
        <GroupDeleteModal
            :group="group"
            @deleted="router.push({ name: 'admin.groups' })"
            class="uk-width-1-1 uk-margin-small-bottom" />
        <slot data-test="slot"></slot>
    </UFCardBox>
</template>

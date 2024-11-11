<script setup lang="ts">
import GroupCreateModal from '@/components/Pages/Admin/Group/GroupCreateModal.vue'
import GroupDeleteModal from '@/components/Pages/Admin/Group/GroupDeleteModal.vue'
</script>

<template>
    <UFHeaderPage
        title="Groups"
        caption="A listing of the groups for your site. Provides management tools for editing and deleting groups." />

    <UFCardBox>
        <UFSprunjeTable dataUrl="/api/groups" searchColumn="name">
            <template #actions="{ sprunjer }">
                <GroupCreateModal @saved="sprunjer.fetch()" />
            </template>

            <template #header>
                <UFSprunjeHeader sort="name">Groups</UFSprunjeHeader>
                <UFSprunjeHeader sort="description">Description</UFSprunjeHeader>
                <UFSprunjeHeader>Actions</UFSprunjeHeader>
            </template>

            <template #body="{ item, sprunjer }">
                <UFSprunjeColumn>
                    <strong>
                        <RouterLink
                            :to="{
                                name: 'admin.group',
                                params: { slug: item.slug }
                            }">
                            {{ item.name }}
                        </RouterLink>
                    </strong>
                </UFSprunjeColumn>
                <UFSprunjeColumn>{{ item.description }}</UFSprunjeColumn>
                <UFSprunjeColumn>
                    <GroupEditModal :group="item" @saved="sprunjer.fetch()" />
                    <GroupDeleteModal :group="item" />
                </UFSprunjeColumn>
            </template>
        </UFSprunjeTable>
    </UFCardBox>
</template>

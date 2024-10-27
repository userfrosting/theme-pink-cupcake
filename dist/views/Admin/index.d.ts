import { App } from 'vue';
import { default as UFAdminDashboardPage } from './DashboardPage.vue';
import { default as UFAdminActivitiesPage } from './ActivitiesPage.vue';
import { default as UFAdminGroupsPage } from './GroupsPage.vue';
import { default as UFAdminGroupPage } from './GroupPage.vue';
import { default as UFAdminPermissionsPage } from './PermissionsPage.vue';
import { default as UFAdminPermissionPage } from './PermissionPage.vue';
import { default as UFAdminRolePage } from './RolePage.vue';
import { default as UFAdminRolesPage } from './RolesPage.vue';
import { default as UFAdminUserPage } from './UserPage.vue';
import { default as UFAdminUsersPage } from './UsersPage.vue';
export { UFAdminDashboardPage, UFAdminActivitiesPage, UFAdminGroupsPage, UFAdminGroupPage, UFAdminPermissionsPage, UFAdminPermissionPage, UFAdminRolePage, UFAdminRolesPage, UFAdminUserPage, UFAdminUsersPage };
declare const _default: {
    install: (app: App) => void;
};
export default _default;
declare module 'vue' {
    interface GlobalComponents {
        UFAdminDashboardPage: typeof UFAdminDashboardPage;
        UFAdminActivitiesPage: typeof UFAdminActivitiesPage;
        UFAdminGroupsPage: typeof UFAdminGroupsPage;
        UFAdminGroupPage: typeof UFAdminGroupPage;
        UFAdminPermissionsPage: typeof UFAdminPermissionsPage;
        UFAdminPermissionPage: typeof UFAdminPermissionPage;
        UFAdminRolePage: typeof UFAdminRolePage;
        UFAdminRolesPage: typeof UFAdminRolesPage;
        UFAdminUserPage: typeof UFAdminUserPage;
        UFAdminUsersPage: typeof UFAdminUsersPage;
    }
}

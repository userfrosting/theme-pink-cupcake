import { App } from 'vue';
import { default as UFAdminDashboardPage } from './DashboardPage.vue';
export { UFAdminDashboardPage, };
declare const _default: {
    install: (app: App) => void;
};
export default _default;
declare module 'vue' {
    interface GlobalComponents {
        UFAdminDashboardPage: typeof UFAdminDashboardPage;
    }
}

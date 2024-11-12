import { GroupApi } from '@userfrosting/sprinkle-admin/composable/useGroupApi';
declare function __VLS_template(): {
    slots: {
        default?(_: {
            dataTest: string;
        }): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    group: GroupApi;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    groupUpdated: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<{
    group: GroupApi;
}> & Readonly<{
    onGroupUpdated?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

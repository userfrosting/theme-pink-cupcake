declare function __VLS_template(): {
    slots: {
        header?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    btnLabel: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: (StringConstructor | null)[];
        default: string;
    };
    prompt: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    btnLabel: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: (StringConstructor | null)[];
        default: string;
    };
    prompt: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    title: string | null;
    btnLabel: string;
    prompt: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
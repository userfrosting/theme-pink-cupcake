declare function __VLS_template(): {
    slots: {
        label?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    to?: string | {
        name: string;
    };
    label?: string;
    faIcon?: string;
    icon?: string;
    hideCaret?: boolean;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    to?: string | {
        name: string;
    };
    label?: string;
    faIcon?: string;
    icon?: string;
    hideCaret?: boolean;
}> & Readonly<{}>, {
    label: string;
    icon: string;
    to: string | {
        name: string;
    };
    faIcon: string;
    hideCaret: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

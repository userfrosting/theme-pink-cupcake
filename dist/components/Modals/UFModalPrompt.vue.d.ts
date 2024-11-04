declare function __VLS_template(): {
    slots: {
        header?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {
        "ok-btn": HTMLButtonElement;
    };
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
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: import('vue').PropType<any>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (modelValue: any) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
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
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: import('vue').PropType<any>;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((modelValue: any) => any) | undefined;
}>, {
    title: string | null;
    btnLabel: string;
    prompt: string;
    placeholder: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    "ok-btn": HTMLButtonElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

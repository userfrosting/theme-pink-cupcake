declare function __VLS_template(): {
    slots: {
        actions?(_: {}): any;
        header?(_: {}): any;
        body?(_: {
            item: any;
        }): any;
        paginator?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    dataUrl: string;
    hidePagination?: boolean;
    defaultSorts?: {
        [key: string]: string;
    };
    defaultFilters?: {
        [key: string]: string;
    };
    defaultSize?: number;
    defaultPage?: number;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    dataUrl: string;
    hidePagination?: boolean;
    defaultSorts?: {
        [key: string]: string;
    };
    defaultFilters?: {
        [key: string]: string;
    };
    defaultSize?: number;
    defaultPage?: number;
}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

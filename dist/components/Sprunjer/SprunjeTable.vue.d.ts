declare function __VLS_template(): {
    slots: {
        actions?(_: {
            sprunjer: {
                fetch: () => Promise<void>;
                loading: boolean;
            };
        }): any;
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
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    dataUrl: {
        type: StringConstructor;
        required: true;
    };
    hidePagination: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    sprunjer: {
        dataUrl: string;
        size: import('vue').Ref<number, number>;
        page: import('vue').Ref<number, number>;
        sorts: import('vue').Ref<string, string>;
        data: import('vue').Ref<any, any>;
        fetch: () => Promise<void>;
        loading: import('vue').Ref<boolean, boolean>;
        downloadCsv: () => void;
        totalPages: import('vue').ComputedRef<number>;
        countFiltered: import('vue').ComputedRef<any>;
        count: import('vue').ComputedRef<any>;
        rows: import('vue').ComputedRef<any>;
        first: import('vue').ComputedRef<number>;
        last: import('vue').ComputedRef<number>;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    dataUrl: {
        type: StringConstructor;
        required: true;
    };
    hidePagination: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    hidePagination: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

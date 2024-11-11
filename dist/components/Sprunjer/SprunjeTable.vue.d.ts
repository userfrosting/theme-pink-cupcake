declare function __VLS_template(): {
    slots: {
        actions?(_: {
            sprunjer: {
                dataUrl: any;
                size: import('vue').Ref<number, number>;
                page: import('vue').Ref<number, number>;
                sorts: import('vue').Ref<import('@userfrosting/sprinkle-core/sprunjer').AssociativeArray, import('@userfrosting/sprinkle-core/sprunjer').AssociativeArray>;
                filters: import('vue').Ref<import('@userfrosting/sprinkle-core/sprunjer').AssociativeArray, import('@userfrosting/sprinkle-core/sprunjer').AssociativeArray>;
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
                toggleSort: (column: string) => void;
            };
        }): any;
        filters?(_: {
            sprunjer: {
                dataUrl: any;
                size: import('vue').Ref<number, number>;
                page: import('vue').Ref<number, number>;
                sorts: import('vue').Ref<import('@userfrosting/sprinkle-core/sprunjer').AssociativeArray, import('@userfrosting/sprinkle-core/sprunjer').AssociativeArray>;
                filters: import('vue').Ref<import('@userfrosting/sprinkle-core/sprunjer').AssociativeArray, import('@userfrosting/sprinkle-core/sprunjer').AssociativeArray>;
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
                toggleSort: (column: string) => void;
            };
        }): any;
        header?(_: {
            sprunjer: {
                dataUrl: any;
                size: import('vue').Ref<number, number>;
                page: import('vue').Ref<number, number>;
                sorts: import('vue').Ref<import('@userfrosting/sprinkle-core/sprunjer').AssociativeArray, import('@userfrosting/sprinkle-core/sprunjer').AssociativeArray>;
                filters: import('vue').Ref<import('@userfrosting/sprinkle-core/sprunjer').AssociativeArray, import('@userfrosting/sprinkle-core/sprunjer').AssociativeArray>;
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
                toggleSort: (column: string) => void;
            };
        }): any;
        body?(_: {
            item: any;
            sprunjer: {
                dataUrl: any;
                size: import('vue').Ref<number, number>;
                page: import('vue').Ref<number, number>;
                sorts: import('vue').Ref<import('@userfrosting/sprinkle-core/sprunjer').AssociativeArray, import('@userfrosting/sprinkle-core/sprunjer').AssociativeArray>;
                filters: import('vue').Ref<import('@userfrosting/sprinkle-core/sprunjer').AssociativeArray, import('@userfrosting/sprinkle-core/sprunjer').AssociativeArray>;
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
                toggleSort: (column: string) => void;
            };
        }): any;
        filterPanel?(_: {
            sprunjer: {
                dataUrl: any;
                size: import('vue').Ref<number, number>;
                page: import('vue').Ref<number, number>;
                sorts: import('vue').Ref<import('@userfrosting/sprinkle-core/sprunjer').AssociativeArray, import('@userfrosting/sprinkle-core/sprunjer').AssociativeArray>;
                filters: import('vue').Ref<import('@userfrosting/sprinkle-core/sprunjer').AssociativeArray, import('@userfrosting/sprinkle-core/sprunjer').AssociativeArray>;
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
                toggleSort: (column: string) => void;
            };
        }): any;
        paginator?(_: {
            sprunjer: {
                dataUrl: any;
                size: import('vue').Ref<number, number>;
                page: import('vue').Ref<number, number>;
                sorts: import('vue').Ref<import('@userfrosting/sprinkle-core/sprunjer').AssociativeArray, import('@userfrosting/sprinkle-core/sprunjer').AssociativeArray>;
                filters: import('vue').Ref<import('@userfrosting/sprinkle-core/sprunjer').AssociativeArray, import('@userfrosting/sprinkle-core/sprunjer').AssociativeArray>;
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
                toggleSort: (column: string) => void;
            };
        }): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    dataUrl: string;
    hidePagination?: boolean;
    hideFilters?: boolean;
    defaultSorts?: {
        [key: string]: string;
    };
    defaultFilters?: {
        [key: string]: string;
    };
    defaultSize?: number;
    defaultPage?: number;
    searchColumn?: string;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    dataUrl: string;
    hidePagination?: boolean;
    hideFilters?: boolean;
    defaultSorts?: {
        [key: string]: string;
    };
    defaultFilters?: {
        [key: string]: string;
    };
    defaultSize?: number;
    defaultPage?: number;
    searchColumn?: string;
}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

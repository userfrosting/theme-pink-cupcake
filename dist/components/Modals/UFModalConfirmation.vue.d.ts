import { Severity } from '@userfrosting/sprinkle-core/types';
/**
 * Props :
 * - closable (bool; Default: false): Shows a button allowing the modal to be closed by the user
 * - escClose (bool; Default: true): Allows the modal to be closed by pressing the ESC key
 * - bgClose (bool; Default: true): Allows the modal to be closed by clicking the background
 * - icon (string; Default: 'triangle-exclamation'): Icon to display in the modal. Null to disable
 * - acceptIcon (string; Default: 'check'): Icon to display on the accept button. Null to disable
 * - rejectIcon (string; Default: 'xmark'): Icon to display on the reject button. Null to disable
 * - acceptLabel (string; Default: 'Confirm'): Label for the accept button
 * - rejectLabel (string; Default: 'Cancel'): Label for the reject button
 * - cancelBtn (bool; Default: true): Show the cancel button
 * - acceptSeverity (Severity; Default: Severity.Primary): Severity of the accept button
 * - rejectSeverity (Severity; Default: Severity.Default): Severity of the reject button
 * - title (string; Default: 'Confirmation'): Title of the modal
 * - prompt (string; Default: 'Please confirm to proceed moving forward.'): Prompt message
 */
interface Props {
    closable?: boolean;
    escClose?: boolean;
    bgClose?: boolean;
    icon?: string | null;
    acceptIcon?: string | null;
    rejectIcon?: string | null;
    acceptLabel?: string;
    rejectLabel?: string;
    acceptSeverity?: Severity;
    rejectSeverity?: Severity;
    cancelBtn?: boolean;
    title?: string | null;
    prompt?: string;
}
declare function __VLS_template(): {
    slots: {
        header?(_: {}): any;
        default?(_: {}): any;
        prompt?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    confirmed: (...args: any[]) => void;
    cancelled: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onConfirmed?: ((...args: any[]) => any) | undefined;
    onCancelled?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

import { GroupDeleteResponse } from '@userfrosting/sprinkle-admin/composable/useGroupDeleteApi';
/**
 * Composable
 */
export declare function useGroupDeleteModal(): {
    confirmDeleteGroup: (slug: string) => Promise<void | GroupDeleteResponse>;
};

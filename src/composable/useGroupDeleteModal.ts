/**
 * useGroupDeleteModal
 *
 * Extends the useGroupDeleteApi composable to provide a UiKit confirmation
 * modal before deleting a group.
 */
import UIkit from 'uikit'
import type { GroupDeleteResponse } from '@userfrosting/sprinkle-admin/composable/useGroupDeleteApi'
import { useGroupDeleteApi } from '@userfrosting/sprinkle-admin/composable/useGroupDeleteApi'
import type { AlertInterface } from '@userfrosting/sprinkle-core/types'

/**
 * Composable
 */
export function useGroupDeleteModal() {
    const { deleteGroup } = useGroupDeleteApi()

    async function confirmDeleteGroup(slug: string) {
        // Call the Modal Confirmation
        return UIkit.modal.confirm('Are you sure you want to delete this group?').then(
            async () => {
                // Call the deleteGroup API
                return deleteGroup(slug)
                    .then((response: GroupDeleteResponse) => {
                        // Display notification
                        UIkit.notification({
                            message: response.message,
                            status: 'success',
                            pos: 'bottom-right',
                            timeout: 4000
                        })

                        // Return promise
                        return response
                    })
                    .catch((err: AlertInterface) => {
                        // Display notification
                        UIkit.notification({
                            message: err.description,
                            status: 'danger',
                            pos: 'bottom-right',
                            timeout: 4000
                        })

                        // Throw error
                        throw err
                    })
            },
            () => {}
        )
    }

    return { confirmDeleteGroup }
}

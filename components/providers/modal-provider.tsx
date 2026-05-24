'use client'

import { SettingsModal } from "@/components/modals/settings-modal"
import { CoverImageModal } from "@/components/modals/cover-image-modal";

export const ModalProvider = () => {
    return (
        <>
            <SettingsModal />
            <CoverImageModal/>
        </>
    )

}

import { createContext, useState } from "react";


export const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [emailModal, setEmailModal] = useState(false)

    return (
        <ModalContext.Provider value={{
            isModalOpen,
            emailModal,
            setIsModalOpen,
            setEmailModal
        }}>
            {children}
        </ModalContext.Provider>
    )
}
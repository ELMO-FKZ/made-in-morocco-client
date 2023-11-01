import { createContext, useState, useMemo } from "react"
import PropTypes from "prop-types"

export const ModalContext = createContext()

export const ModalContextProvider = ({ children }) => {

    const [showModal, setShowModal] = useState(false)
    const [showMessage, setShowMessage] = useState("")

    const closeModal = () => {
        setShowModal(false)
    }

    const openModalContact = () => {
        setShowMessage("Your message has been sent successfully.")
        setShowModal(true)
    }

    const openModalNewsletter = () => {
        setShowMessage("We are so glad you have joined us.")
        setShowModal(true)
    }

    const contextValues = useMemo(() => {
        return { showModal, showMessage, closeModal, openModalContact, openModalNewsletter }
    }, [ showModal, showMessage ])

    return (
        <ModalContext.Provider value={contextValues}>
            {children}
        </ModalContext.Provider>
    )
}

ModalContextProvider.propTypes = {
    children: PropTypes.any.isRequired
}

import { useContext, memo } from "react"
import { FaTimes } from "react-icons/fa"
import { ModalContext } from "../../contexts/ModalContext"
import "./modal.css"

const Modal = memo(function Modal() {

    const { showModal, showMessage, closeModal } = useContext(ModalContext)

    return (
        <div className={`backdrop ${showModal ? "" : "backdrop--hide"}`} onClick={(e) => {
            if (e.target === e.currentTarget) {
                closeModal()
            }
        }} >
            <div className="modal" >
                <div className="modal__text">
                    <h1 className="modal__heading">THANK YOU!</h1>
                    <p>{showMessage}</p>
                </div>
                <button className="modal__btn" onClick={closeModal}><FaTimes /></button>
            </div>
        </div>
    )
})

export default Modal
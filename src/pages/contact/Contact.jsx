import { useState, useContext, useRef } from "react"
import SpecialHeading from "../../components/specialHeading/SpecialHeading"
import { FaPaperPlane } from "react-icons/fa"
import Modal from "../../components/modal/Modal"
import { ModalContext } from "../../contexts/ModalContext"
import { validateForm } from "../../utils/validateForm"
import useBodyOverflow from "../../hooks/useBodyOverflow"
import "./contact.css"

const Contact = () => {

    const initialValues = { name: "", email: "", message: ""}
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})
    const refName = useRef()
    const refEmail = useRef()
    const refMessage= useRef()

    const { showModal, openModalContact } = useContext(ModalContext)

    useBodyOverflow(showModal)

    const handleChange = (e) => {
        e.persist()
        let name = e.target.name
        let value = e.target.value
        validateForm(name, value, errors, setErrors, refName, refEmail, refMessage )
        setValues({...values, [name]:value})
    }

    const sendMessage = async(e) => {
        e.preventDefault()
        try {
            if(Object.keys(errors).length === 0 && Object.keys(values).length !==0) {
                const res = await fetch(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/api/message`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(values)
                })
                if(res.ok) {
                    openModalContact()
                    setValues(initialValues)
                    {
                        [refName, refEmail, refMessage].map((refItem) => {
                            return refItem.current.classList.remove("contact__form-input--valid")
                        })
                    }
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="contact container">
            <SpecialHeading title="Contact us" />
            <div className="contact__form-container">
                <form className="contact__form" method="" onSubmit={(e) => sendMessage(e) } >
                    <div className="contact__form-name">
                        <label className="contact__form-label" htmlFor="name">Full name</label>
                        <input className="contact__form-input"
                            ref={refName} 
                            value={values.name}
                            id="name" 
                            type="text" 
                            placeholder="Enter your full name" 
                            name="name" 
                            onChange={handleChange}
                            autoComplete="off"
                            required />
                        {errors.name && <span className="contact__form-error">{errors.name}</span>}
                    </div>
                    <div className="contact__form-email">
                        <label className="contact__form-label" htmlFor="email">Email</label>
                        <input className="contact__form-input"
                            ref={refEmail}
                            value={values.email}
                            id="email"
                            type="email" 
                            placeholder="Enter your email" 
                            name="email"
                            onChange={handleChange}
                            autoComplete="off"
                            required />
                        {errors.email && <span className="contact__form-error">{errors.email}</span>}
                    </div>
                    <div className="contact__form-message">
                        <label className="contact__form-label" htmlFor="message">Message</label>
                        <textarea className="contact__form-input"
                            ref={refMessage}
                            value={values.message}
                            id="message" 
                            placeholder="Enter your message" 
                            rows="10" 
                            name="message"
                            onChange={handleChange} 
                            autoComplete="off"
                            required>
                        </textarea>
                        {errors.message && <span className="contact__form-error">{errors.message}</span>}
                    </div>
                    <div className="btns-center">
                        <button className="primary__btn btn" type="submit" id="submit" value="submit" name="Submit"> Submit <FaPaperPlane/></button>
                    </div>
                </form>
            </div>
            {showModal && <Modal />}
        </div>
    )
}

export default Contact
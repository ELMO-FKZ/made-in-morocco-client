import { useState, useContext, useRef, memo } from "react"
import SpecialHeading from "../specialHeading/SpecialHeading"
import Modal from "../modal/Modal"
import { ModalContext } from "../../contexts/ModalContext"
import { validateEmail } from "../../utils/validateEmail"
import useBodyOverflow from "../../hooks/useBodyOverflow"
import "./newsletter.css"

const Newsletter = memo(function Newsletter() {

    const [input, setInput] = useState("")
    const [errors, setErrors] = useState("")
    const refEmail = useRef()
    const { showModal, openModalNewsletter } = useContext(ModalContext)

    useBodyOverflow(showModal)

    const handleChange = (e) => {
        e.persist()
        let value = e.target.value
        validateEmail(value, refEmail, setErrors)
        setInput(value)
    }

    const subscribeHandler = async(e) => {
        e.preventDefault()
        try {
            if(errors === "") {
                const res = await fetch("http://localhost:8000/api/newsletter", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: input})
                })
                if(res.ok) {
                    openModalNewsletter()
                    setInput("")
                    refEmail.current.classList.remove("newsletter__input--valid")
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="newsletter container" >
            <SpecialHeading title="Newsletter" />
            <p className="newsletter__para">Be the first one to know about our new products and exclusive offers.</p>
            <form className="newsletter__form" method="" onSubmit={(e) => subscribeHandler(e)}>
                <div className="newsletter__div" >
                    <input className="newsletter__input" 
                        ref={refEmail}
                        value={input}
                        onChange={handleChange}
                        type="email"  
                        placeholder="Enter your email"
                        required />
                    <button className="newsletter__btn" type="submit">Subscribe</button>
                    {errors && <div className="newsletter__form-error">{errors}</div>}
                </div>
            </form>
            {showModal && <Modal />}
        </div>
    )
})

export default Newsletter
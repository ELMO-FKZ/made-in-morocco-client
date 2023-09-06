import { Link as LinkRouter} from "react-router-dom"
import {FaTimesCircle} from "react-icons/fa"
import "./cancel.css"

const Cancel = () => {

    return (
        <div className='cancel container'>
            <FaTimesCircle className="feedback-message__icon feedback-message__icon--red" />
            <div className="feedback-message__title feedback-message__title--down">Your payment has been cancelled!</div>
            <p>Check out <LinkRouter className="feedback-message__link" to="/products">more products</LinkRouter> from our store.</p>
        </div>
    )
}

export default Cancel
import { Link as LinkRouter} from "react-router-dom"
import { FaCheckCircle } from "react-icons/fa"
import "./success.css"

const Success = () => {

    return (
        <div className="success container">
            <FaCheckCircle className="feedback-message__icon feedback-message__icon--green" />
            <div className="feedback-message__title feedback-message__title--down">Your payment has been sent successfully!</div>
            <p>Check out <LinkRouter className="feedback-message__link" to="/products">more products</LinkRouter> from our store.</p>
        </div>
    )
}

export default Success
import { useState, memo } from "react"
import { BiPlus, BiMinus } from "react-icons/bi"
import PropTypes from "prop-types"
import "./faqs.css"

const FaqsItem = memo(function FaqsItem ({ question, answer}) {

    const [isExtended, setIsExtended] = useState(false)

    const handleExtend = () => {
        setIsExtended(prevIsExtended => !prevIsExtended)
    }

    return (
        <div className='faqs__item'>
            <p className="faqs__question" onClick={handleExtend}>
                {question}
                <span className='faqs__extend'>
                    <BiPlus className={`faqs__icon ${isExtended ? "faqs__icon--hide" : ""}`} />
                    <BiMinus className={`faqs__icon ${isExtended ? "" : "faqs__icon--hide"}`}/>
                </span>
            </p>
            <p className={`faqs__answer ${isExtended ? "" : "faqs__answer--hide"}`}>
                {answer}
            </p>
        </div>
    )
})

export default FaqsItem

FaqsItem.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
}
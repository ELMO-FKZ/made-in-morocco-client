import { memo } from "react"
import SpecialHeading from "../specialHeading/SpecialHeading"
import faqs from "../../data/faqs"
import FaqsItem from "./FaqsItem"
import "./faqs.css"

const Faqs = memo(function Faqs() {

    return (
        <div className="faqs container" >
            <SpecialHeading title="Faqs" />
            <div className="faqs__container">
                {faqs.map((faq) => {
                    return (
                        <FaqsItem key={faq.id} question={faq.question} answer={faq.answer}/>
                    )
                })}
            </div>
        </div>
    )
})

export default Faqs
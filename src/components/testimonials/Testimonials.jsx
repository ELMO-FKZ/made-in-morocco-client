import { useState, memo, useCallback } from "react"
import SpecialHeading from "../specialHeading/SpecialHeading"
import testimonials from "../../data/testimonials"
import Testimonial from "./Testimonial"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import "./testimonials.css"

const Testimonials = memo(function Testimonials() {

    const [people] = useState(testimonials)
    const [index, setIndex] = useState(0)

    if (index < 0) {
        setIndex(people.length - 1)
    } else if (index > people.length - 1) {
        setIndex(0)
    }

    const handleLeftClick = useCallback(() => {
        setIndex(index - 1)
    }, [index])

    const handleRightClick = useCallback(() => {
        setIndex(index + 1)
    }, [index])

    return (
        <div className="testimonials container" >
            <SpecialHeading title="Testimonials" />
            <div className="testimonials__box">
                <div className="testimonials__container">
                    {
                        people.map((person, indexPeople) => {
                            let position = "testimonials__item"

                            if (indexPeople === index) {
                                position = "testimonials__item testimonials__item--activeItem"
                            }

                            return (
                                <Testimonial key={person.id} picture={person.picture} name={person.name} country={person.country} testimonial={person.testimonial} position={position}/>
                            )
                        })
                    }
                </div>
                <div className="testimonials__dots">
                    {
                        people.map((person, i) => {
                            return (
                                <span className={`testimonials__dot ${i === index ? "testimonials__dot--active" : ""}`} key={i}></span>
                            )
                        }) 
                    }
                    </div>
                <button className="testimonials__left" onClick={handleLeftClick} aria-label="go left" ><BiChevronLeft className="testimonials__icon"/></button>
                <button className="testimonials__right" onClick={handleRightClick} aria-label="go right" ><BiChevronRight className="testimonials__icon"/></button>
            </div>
        </div>
    )
})

export default Testimonials
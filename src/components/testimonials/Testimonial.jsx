import { memo } from "react"
import PropTypes from "prop-types"
import "./testimonials.css"

const Testimonial = memo(function Testimonial({ position, picture, name, country, testimonial }) {
    return (
        <div className={position}>
            <div className="testimonials__image">
                <img className="testimonials__img" src={picture} alt="reviewer picture" />
            </div>
            <div className="testimonials__name">{name}</div>
            <div className="testimonials__country">{country}</div>
            <p className="testimonials__text">{testimonial}</p>
        </div>
    )
})

export default Testimonial

Testimonial.propTypes = {
    position: PropTypes.string.isRequired,
    picture: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    testimonial: PropTypes.string.isRequired
}
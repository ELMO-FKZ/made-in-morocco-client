import { memo } from "react"
import PropTypes from "prop-types"
import "./specialHeading.css"


const SpecialHeading = memo(function SpecialHeading({ title }) {

    return (
        <div className="special-heading">
            <h2 className="special-title">{title}</h2>
        </div>
    )
})

export default SpecialHeading

SpecialHeading.propTypes = {
    title: PropTypes.string.isRequired
}
import { useRef, memo } from "react"
import { Link as LinkRouter } from "react-router-dom"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import SpecialHeading from "../specialHeading/SpecialHeading"
import collections from "../../data/collections"
import "./collections.css"

const Collections = memo(function Collections() {

    const carousel = useRef()

    const handleLeftClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const handleRightClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }
    
    return (
        <div className="collections container" >
            <SpecialHeading title="Collections" />
            <button className="collections__btn" onClick={handleLeftClick} aria-label="go left" >
                <BiChevronLeft className="collections__chevron" />
            </button>
            <button className="collections__btn" onClick={handleRightClick} aria-label="go right" >
                <BiChevronRight className="collections__chevron" />
            </button>
            <div className="collections__carousel" ref={carousel}>
                {
                    collections.map((collection) => {
                        return (
                            <LinkRouter className="collections__link" to={`/products/${collection.name}`} key={collection.id}>
                                <div className="collections__item">
                                    <span className="collections__item-spn">{collection.name}</span>
                                    <img className="collections__item-img" src={collection.image} alt="collection image" />
                                </div>
                            </LinkRouter>
                        )
                    })
                }
            </div>
        </div>
    )
})

export default Collections
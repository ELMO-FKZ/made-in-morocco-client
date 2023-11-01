import { useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ShoppingContext } from "../../contexts/ShoppingContext"
import useFetch from "../../hooks/useFecth"
import SpecialHeading from "../../components/specialHeading/SpecialHeading"
import { FaCartPlus, FaArrowRight } from "react-icons/fa"
import "./productDetails.css"

function ProductDetails() {

    const {id} = useParams()
    const navigate = useNavigate()
    const {addToCart} = useContext(ShoppingContext)
    const {products} = useFetch(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/api/products/${id}`) 
    const newPrice = Math.round(products?.price * (1 - products?.promotion/100))

    const goBack = () => {
        navigate("/products")
    }

    return (
        <div className="details container">
            <SpecialHeading title="Details" />
            <div className="details-info">
                <div className="details-info__image">
                    <img className="details-info__img" src={products?.image} alt={products?.title} />
                </div>
                <div className="details-info__content">
                    <h3 className="details-info__title">{products?.title}</h3>
                    <span className="details-info__new-price">${products?.price}</span>
                    <span className="details-info__old-price">${newPrice}</span>
                    <p className="details-info__description">{products?.description}</p>
                    <button className="btn primary__btn" onClick={() => addToCart(products)}>Add to cart <FaCartPlus /></button>
                    <button className="btn secondary__btn" onClick={() => goBack()}>Go back <FaArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
import { useContext, memo } from "react"
import { Link as LinkRouter } from "react-router-dom"
import { motion } from "framer-motion"
import { ShoppingContext } from "../../contexts/ShoppingContext"
import { FaCartPlus } from "react-icons/fa"
import PropTypes from "prop-types"
import "./productItem.css"

const ProductItem = memo(function ProductItem({ product, isSelected }) {

    const {addToCart} = useContext(ShoppingContext)

    return (
        <motion.div className="product-item" style={{display: (isSelected === "All" || isSelected === product.category) ? "block" : 'none'}}
            whileInView={{scale: 1}}
            transition={{duration: 0.3, delay: 0.3}}
            initial={{scale: 0.95}}>
            <LinkRouter className="product-item__link" to={`/products/${product.category}/${product._id}`} >
            <div className="product-item__image">
                <img className="product-item__img" src={product.image} alt={product.title} />
            </div>
            <div className="product-item__price">
                <span className="product-item__new-price">${Math.round(product.price * (1 - product.promotion/100))}</span>
                <span className="product-item__old-price">${product.price}</span>
            </div>
            <div className="product-item__title">{product.title}</div>
            </LinkRouter>
            <button className="btn product-item__btn" onClick={() => addToCart(product)}>Add to cart <FaCartPlus /></button>
        </motion.div>
    )
})

export default ProductItem

ProductItem.propTypes = {
    product: PropTypes.any.isRequired,
    isSelected: PropTypes.any.isRequired
}
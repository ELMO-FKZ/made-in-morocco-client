import { useState, useEffect, useContext, memo } from "react"
import { Link as LinkRouter } from "react-router-dom"
import { FaShoppingCart, FaArrowUp } from "react-icons/fa"
import { ShoppingContext } from "../../contexts/ShoppingContext"
import "./control.css"

const Control = memo(function Control() {

    const {cartItems} = useContext(ShoppingContext)
    const [isPageOnScroll, setIsPageOnScroll] = useState(false)

    useEffect(() => {
        function headerOnScroll() {
            window.scrollY > "700" ? setIsPageOnScroll(true) : setIsPageOnScroll(false)
        }
        window.addEventListener("scroll", headerOnScroll)
        return () => {
            window.removeEventListener("scroll", headerOnScroll)
        }
    }, [])

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    
    return (
        <>
            <LinkRouter className={`cart-control ${isPageOnScroll ? "cart-control--bt4" : ""}`} to="/cart">
                <span className="cart-control__icon"><FaShoppingCart /></span>
                <span className="cart-control__number">{cartItems.length}</span>
            </LinkRouter>
        {
            isPageOnScroll && 
            <button className="up-control" onClick={handleScrollToTop} >
                <span className="control__icon"><FaArrowUp /></span>
            </button>
        }
        </>
    )
})

export default Control
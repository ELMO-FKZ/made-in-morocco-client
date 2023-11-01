import { useContext } from "react"
import { Link as LinkRouter, useNavigate } from "react-router-dom"
import { ShoppingContext } from "../../contexts/ShoppingContext"
import { FaTrashAlt, FaPlus, FaMinus, FaArrowRight, FaMoneyCheckAlt, FaShoppingCart } from "react-icons/fa"
import SpecialHeading from "../../components/specialHeading/SpecialHeading"
import "./cart.css"

function Cart() {

    const {cartItems, increament, decreament, remove} = useContext(ShoppingContext)
    const navigate = useNavigate()

    const checkOut = async() => {
        try {
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/api/checkout`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                mode: "cors",
                body: JSON.stringify({
                    items: cartItems
                })
            })
            const data = await res.json()
            window.location = data.url
        } catch (error) {
            console.log(error)
        }
    }

    const goBack = () => {
        navigate("/products")
    }

    return (
        <div className="cart container">
            <SpecialHeading title="Cart" />
            <div className="cart__wrapper">
                {(cartItems.length === 0) 
                ? (
                    <div className="feedback-message">
                        <FaShoppingCart className="feedback-message__icon feedback-message__icon--grey" />
                        <div className="feedback-message__title" >Your cart is empty!</div>
                        <p>Click <LinkRouter className="feedback-message__link" to="/products">here</LinkRouter> to continue shopping</p>
                    </div>
                )
                : (
                    <>
                    <table className="cart__list-items">
                        <thead className="cart__head">
                            <tr>
                                <th className="cart__head-items">Product</th>
                                <th className="cart__head-items"></th>
                                <th className="cart__head-items">Price</th>
                                <th className="cart__head-items">Quantity</th>
                                <th className="cart__head-items">Subtotal</th>
                                <th className="cart__head-items"></th>
                            </tr>
                        </thead>
                        <tbody className="cart__body">
                            {
                                cartItems?.map(item => {
                                    const price = Math.round(item.price * (1 - item.promotion/100))
                                    return (
                                        <tr className="cart-item" key={item._id}>
                                            <td className="cart-item__td">
                                                <img className="cart-item__img" src={item.image} alt={item.title} />
                                            </td>
                                            <td className="cart-item__td">
                                                {item.title}
                                                <div className="cart-item__price">
                                                    ${price}
                                                </div>
                                            </td>
                                            <td className="cart-item__td">
                                                ${price}
                                            </td>
                                            <td className="cart-item__td">
                                                <button className="cart-item__valbtn" onClick={() => decreament(item)} aria-label="minus" ><FaMinus /></button>
                                                <span className="cart-item__val">{item.amount}</span>
                                                <button className="cart-item__valbtn" onClick={() => increament(item)} aria-label="plus"><FaPlus /></button>
                                            </td>
                                            <td className="cart-item__td">
                                                ${price * item.amount}
                                            </td>
                                            <td className="cart-item__td">
                                                <button className="cart-item__rembtn" onClick={() => remove(item)} aria-label="remove"><FaTrashAlt /></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className="cart-foot__td"></td>
                                <td className="cart-foot__td"></td>
                                <td className="cart-foot__td"></td>
                                <td className="cart-foot__td cart-foot__td--grey">Total</td>
                                <td className="cart-foot__td cart-foot__td--grey">
                                    ${
                                        cartItems?.reduce((acc, item)=>{
                                            const price = Math.round(item.price * (1 - item.promotion/100))
                                            return acc += price * item.amount
                                        }, 0)
                                    }
                                </td>
                                <td className="cart-foot__td"></td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className="cart-action">
                        <button className="btn primary__btn" onClick={() => checkOut()} aria-label="Chechout" >Checkout <FaMoneyCheckAlt /></button>
                        <button className="btn secondary__btn" onClick={() => goBack()} aria-label="go back" >Go back <FaArrowRight /></button>
                    </div>
                    </>
                )      
                }
            </div>
        </div>
    )
}

export default Cart
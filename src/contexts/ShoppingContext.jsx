import { useState, useEffect, createContext, useMemo, useCallback } from "react"
import { useToast } from "../hooks/useToast"
import PropTypes from "prop-types"


export const ShoppingContext = createContext()

export const ShoppingContextProvider = ({ children }) => {
    
    const toast = useToast()

    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || [])

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])

    function addToCart(item) {
        let productItem = cartItems.find(product => product._id === item._id)

        if(productItem) {
            productItem.amount += 1
            setCartItems(prev => [...prev])
            toast.update("Your item has been updated")
        } else {
            item.amount = 1
            setCartItems(prev => [item, ...prev])
            toast.add("Your item has been added")
        }
    }

    const increament = useCallback((item) => {
        let productItem = cartItems.find(product => product._id === item._id)
        if(productItem) {
            productItem.amount += 1
            setCartItems(prev => [...prev])
            toast.update("Your item has been updated")
        }
    }, [cartItems, toast])

    const decreament = useCallback((item) => {
        let productItem = cartItems.find(product => product._id === item._id)

        if(productItem) {
            productItem.amount -= 1
            if (productItem.amount === 0) {
                setCartItems(cartItems.filter(product => product._id !== item._id))
                toast.remove("Your item has been removed")
            } else {
                setCartItems(prev => [...prev])
                toast.update("Your item has been updated")
            }
        }
    }, [cartItems, toast])

    const remove = useCallback((item) => {
        let productItem = cartItems.find(product => product._id === item._id)

        if(productItem) {
            setCartItems(cartItems.filter(product => product._id !== item._id))
            toast.remove("Your item has been removed")
        }
    }, [cartItems, toast])

    const contextValues = useMemo(() => {
        return { cartItems, addToCart, increament, decreament, remove }
    }, [cartItems])

    return (
        <ShoppingContext.Provider value={contextValues}>
            {children}
        </ShoppingContext.Provider>
    )

}

ShoppingContextProvider.propTypes = {
    children: PropTypes.any.isRequired
}
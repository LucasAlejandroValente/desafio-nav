import React, { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const isInCart = (id) => cart.find((item) => item.id == id)

    const addToCart= (item, quantity) => {
        const newCart = [ ... cart]

        const itemIsInCart = isInCart(item.id)

        if (itemIsInCart) {
            newCart[newCart.findIndex(item => item.id == itemIsInCart.id)].quantity += quantity 

            setCart(newCart)
            return
        }

        item.quantity = quantity
        setCart([...newCart, item])
    }

    const removeFromCart = (item) => {

        const newCart = [...cart]

        const itemIsInCart = isInCart(item.id)

        if (!itemIsInCart) {
            return
        }

        const removeItem = newCart.filter((item) => item.id !== item.id)

        setCart(removeItem)
    }

    const clearCart = () => setCart([])

    console.log(cart)

    return (<CartContext.Provider value ={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        setCart,
    }}>{children}</CartContext.Provider>
    )

}

export default CartContextProvider
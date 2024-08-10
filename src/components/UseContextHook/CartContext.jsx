import React, { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(item) {
        setCartItems(pre => [...pre, item]);
    }

    function removeFromCart(itemId) {
        setCartItems(pre => pre.filter(item => item.id != itemId));
    }

    function clearCart() {
        setCartItems([]);
    }


    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

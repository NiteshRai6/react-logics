import React from 'react';
import Product from './Product';
import Cart from './Cart';
import { CartProvider } from './CartContext';

export default function UseContextHook() {
    return (
        <CartProvider>
            <Product />
            <Cart />
        </CartProvider>
    )
}

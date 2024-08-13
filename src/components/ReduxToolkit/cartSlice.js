import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {

        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
            else {
                state.cartItems.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                });
                state.totalQuantity++;
            }
            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + item.totalPrice, 0);
        },

        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);

            if (existingItem) {
                state.cartItems = state.cartItems.filter(item => item.id !== id);
                state.totalQuantity--;
                state.totalAmount -= existingItem.totalPrice;
            }
        },

        clearCart(state) {
            state.cartItems = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        }

    }

});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;


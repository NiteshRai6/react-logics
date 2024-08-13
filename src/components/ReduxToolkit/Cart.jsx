import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from './cartSlice';

export default function Cart() {

    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const dispatch = useDispatch();

    return (
        <div className='m-10 flex flex-col gap-5 justify-center items-center text-xl'>

            <h1 className='text-3xl'>Cart Component :</h1>

            <div>
                {cartItems.length === 0 ? (
                    <h2 className='text-2xl text-red-400'>Cart is Empty!</h2>
                ) : (
                    <table>
                        <thead className='text-[green]'>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Remove</th>
                            </tr>
                        </thead>

                        {cartItems?.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </table>
                )
                }
            </div>

            {cartItems.length > 0 &&
                <div className='flex flex-col gap-5 justify-center items-center'>
                    <h2>Total Amount =
                        <span className='text-[magenta]'> ${totalAmount} </span>
                    </h2>

                    <button
                        className='px-3 py-1 bg-red-800 text-white text-base rounded-lg'
                        onClick={() => dispatch(clearCart())}
                    >
                        Clear Cart
                    </button>
                </div>
            }
        </div>
    )
}

import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export default function Cart() {

    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

    return (
        <div className='m-5'>
            <h1 className='text-2xl p-5'>Cart Component</h1>
            <h3 className='text-xl p-5'>Cart Items = {cartItems.length}</h3>

            {cartItems?.length === 0 ?
                <p>your Cart is empty.</p>
                :
                <ul className='flex gap-5 p-5 justify-center items-center text-xl'>
                    {cartItems.map(item => (
                        <li key={item?.id} className='flex flex-col justify-center items-center gap-5'>
                            {item.name} : {item.age}
                            <button
                                className='py-1 px-3 bg-red-500 text-base text-white'
                                onClick={() => removeFromCart(item.id)}
                            >Remove From Cart</button>
                        </li>
                    ))}
                </ul>
            }

            <div className='m-5'>
                {cartItems.length > 0 &&
                    <button
                        className='py-1 px-3 bg-[magenta] text-base text-white'
                        onClick={() => clearCart()}
                    >Clear Cart</button>
                }
            </div>

        </div>
    )
}

import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export default function Product() {

    const { addToCart } = useContext(CartContext);


    const products = [
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Selena', age: 19 },
        { id: 3, name: 'Charlie', age: 34 },
        { id: 4, name: 'Taylor', age: 43 },
    ]


    return (
        <div className='m-20'>
            <h1 className='text-2xl p-5'>Products List Component</h1>
            <ul className='flex gap-5 p-5 justify-center items-center text-xl'>
                {products.map(item => (
                    <li key={item?.id} className='flex flex-col justify-center items-center gap-5'>
                        {item.name} : {item.age}
                        <button
                            className='py-1 px-3 bg-green-500 text-base text-white'
                            onClick={() => addToCart(item)}
                        >Add To Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './cartSlice';

const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
    { id: 4, name: 'Product 4', price: 400 },
    { id: 5, name: 'Product 5', price: 500 },
];

export default function ProductList() {

    const dispatch = useDispatch();

    return (
        <div className='m-10 flex flex-col gap-5 justify-center items-center'>

            <h1 className='text-3xl p-5'>Product List Component :</h1>

            <ul className='flex justify-center items-center gap-5 text-xl text-[magenta]'>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} : ${product.price}

                        <div className='flex justify-center items-center'>
                            <button
                                className='py-1 px-3 bg-[green] rounded-lg text-white mt-5 text-base'
                                onClick={() => dispatch(addItem(product))}
                            >
                                Add To Cart
                            </button>
                        </div>

                    </li>
                ))}
            </ul>

        </div>
    )
}

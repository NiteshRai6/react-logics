import React from 'react'
import { removeItem } from './cartSlice'
import { useDispatch } from 'react-redux'

export default function CartItem({ item }) {

    const dispatch = useDispatch();

    return (
        <tbody className='text-xl text-[magenta]'>
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.price * item.quantity}</td>
                <td>
                    <button
                        className='px-3 py-1 bg-red-500 text-white text-base rounded-lg'
                        onClick={() => dispatch(removeItem(item.id))}
                    >
                        Remove
                    </button>
                </td>
            </tr>
        </tbody>

    )
}

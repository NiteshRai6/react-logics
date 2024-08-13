import React, { useState } from 'react';

export default function Child() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 5);
    const decrement = () => setCount(count - 5);

    // if user = null or undefined, and using user.name or any other property,
    // throw typeError, that will crash the component and 
    // Error can be caught using Error Boundary.
    const user = null;

    return (
        <div className='m-20 flex flex-col text-[magenta] gap-5 justify-center items-center'>

            <h5 className='text-2xl'>Count :
                <span className='text-[green]'> {count} </span>
            </h5>

            <div className='flex gap-5 justify-center items-center'>
                <button
                    className='bg-blue-500 text-white px-3 py-1 rounded-lg'
                    onClick={increment}
                >
                    Increase
                </button>

                <button
                    className='bg-red-500 text-white px-3 py-1 rounded-lg'
                    onClick={decrement}
                >
                    Decrease
                </button>

                <p className='text-red-950'>{user.name}</p>

            </div>

        </div>
    )
}

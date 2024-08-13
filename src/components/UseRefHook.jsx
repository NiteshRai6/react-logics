import React, { useState, useEffect, useRef } from 'react';

export default function UseRefHook() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef(count);
    const inputRef = useRef(null);

    function handleInput() {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    useEffect(() => {
        console.log(count);

        prevCountRef.current = count;
    }, [count]);

    const prevCount = prevCountRef.current;
    console.log(prevCount);


    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);


    return (
        <>
            <div className='flex flex-col gap-5 justify-center items-center m-20'>
                <h1 className='text-2xl text-blue-500'>useRef</h1>

                <input
                    type='text'
                    className='py-1 px-3 border-2'
                    ref={inputRef}
                />

                <button
                    className='px-3 py-1 bg-[green] text-white rounded-lg'
                    onClick={handleInput}
                >
                    Focus Input
                </button>
            </div>

            <div className='flex flex-col gap-5 justify-center items-center m-20'>
                <h1 className='text-2xl'>Count :
                    <span className='text-[magenta]'> {count} </span>
                </h1>

                <h2 className='text-2xl text-blue-500'>
                    {count > prevCount ? 'Counter has Increased.'
                        : count < prevCount ? 'Counter has decreased'
                            : 'No change yet.'
                    }
                </h2>

                <div className='flex gap-5'>
                    <button
                        className='px-3 py-1 bg-[green] text-white rounded-lg'
                        onClick={increment}
                    >
                        Increase
                    </button>

                    <button
                        className='px-3 py-1 bg-[red] text-white rounded-lg'
                        onClick={decrement}
                    >
                        Decrease
                    </button>
                </div>

            </div>

        </>
    )
}

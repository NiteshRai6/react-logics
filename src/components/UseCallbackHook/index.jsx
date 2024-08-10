import React, { useCallback, useState } from 'react';
import Child from './Child';

export default function UseCallbackHook() {

    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    console.log('Parent Rendered.');


    return (
        <div className='m-20 flex flex-col gap-5 justify-center items-center'>

            <h1 className='text-2xl text-[blue]'>Parent Component :</h1>

            <h2 className='text-2xl text-[magenta]'>Count : {count}</h2>

            <button
                className='py-1 px-3 bg-green-500 text-white'
                onClick={increment}
            >
                Increase
            </button>

            <h5 className='text-xl'>Input Value :
                <span className='text-[magenta]'> {text} </span>
            </h5>

            <input
                type='text'
                className='p-1 border-2'
                onChange={e => setText(e.target.value)}
            />

            <Child increment={increment} />

        </div>
    )
}

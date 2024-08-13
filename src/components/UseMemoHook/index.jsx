import React, { useMemo, useState } from 'react';
import Child from './Child';

export default function UseMemoHook() {

    const [count, setCount] = useState(0);
    const [numbers, setNumbers] = useState(0);

    function increment() {
        setCount(count + 5);
    }

    const result = useMemo(() => {
        console.log(count);
        const str = String(numbers);
        const array = str.split('');
        if (array.length < 2) return;
        const data = array
            .map(num => num ** 2)
            .filter(num => num % 2 === 0)
            .reduce((acc, num) => acc + num);
        return data;
    }, [numbers]);

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
                <span className='text-[magenta]'> {numbers} </span>
            </h5>

            <input
                type='number'
                className='p-1 border-2'
                onChange={e => setNumbers(e.target.value)}
            />

            <Child result={result} />

        </div>
    )
}

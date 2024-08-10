import React, { useEffect, useState } from 'react';

export default function UseEffectHook() {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCount(pre => pre + 1)
    //     })
    //     return () => clearInterval(interval)
    // }, []);

    useEffect(() => {
        console.log('Component Mounted.');

        return () =>
            console.log('Component Unmounted.');
    })

    return (
        <div>
            <h1 className='text-3xl m-20'>Count = {count}</h1>
        </div>
    )
}

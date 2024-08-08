import React, { useState } from 'react';

export default function SyntheticEvent() {
    const [data, setData] = useState();

    function handleChange(event) {
        // Works immediately
        // console.log(event.target.value);

        // Remove from the pool
        // event.persist();
        // setTimeout(() => {
        //     console.log(event.target.value); // Also works because we persisted the event
        // }, 1000);

        setData(event.target.value)
        console.log(data);
    }

    console.log(data);

    return (

        <div className='grid place-content-center w-full h-96'>
            <input
                type="text"
                className='text-xl border-2'
                onChange={handleChange}
            />
        </div>

    );
}
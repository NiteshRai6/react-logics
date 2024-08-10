import React from 'react';

export default function Child({ increment }) {

    console.log('Child Rendered.');


    return (
        <div className='m-10 flex flex-col gap-5 justify-center items-center'>
            <h1 className='text-2xl'>Child Component :</h1>

            <button
                className='py-1 px-3 bg-blue-500 text-white'
                onClick={increment}
            >
                Increase
            </button>
        </div>
    )
}

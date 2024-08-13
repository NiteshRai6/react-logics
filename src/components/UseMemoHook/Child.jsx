import React from 'react';

export default React.memo(function Child({ result }) {

    console.log('Child Rendered.');

    return (
        <div className='m-10 flex flex-col gap-5 justify-center items-center'>
            <h1 className='text-2xl text-[green]'>Child Component :</h1>

            <p className='text-xl'>Expensive Result :
                <span className='text-[magenta]'>{result}</span>
            </p>
        </div>
    )
});

import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };

        case 'decrement':
            return { count: state.count - 1 };

        case 'reset':
            return initialState;
    }
}

export default function UseReducerHook() {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className='m-20 flex flex-col gap-5 justify-center items-center'>
            <h1 className='text-3xl'>Count = {state.count}</h1>

            <div className='flex gap-5 text-xl'>
                <button
                    className='py-1 px-3 bg-[green] text-white'
                    onClick={() => dispatch({ type: 'increment' })}
                >
                    Increment
                </button>

                <button
                    className='py-1 px-3 bg-[red] text-white'
                    onClick={() => dispatch({ type: 'decrement' })}
                >
                    Decrement
                </button>

                <button
                    className='py-1 px-3 bg-[magenta] text-white'
                    onClick={() => dispatch({ type: 'reset' })}
                >
                    Reset
                </button>
            </div>


        </div>
    )
}

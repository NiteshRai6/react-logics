import React from 'react';

export default function Simple(props, { timestamp, color }) {
    return (
        <div className='flex flex-col gap-5 m-20 justify-center items-center text-2xl text-[magenta]'>
            <h1>Simple Component with HOC</h1>

            <h5>Color Prop : {props.color}</h5>

            <h5>Current Time : {timestamp}</h5>
        </div>
    )
}

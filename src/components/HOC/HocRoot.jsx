import React from 'react'
import WithTimestamp from './WithTimestamp'
import Simple from './Simple'

export default function HocRoot() {

    const SimpleWithTime = WithTimestamp(Simple);

    return (
        <div>
            <SimpleWithTime color='Magenta' />
        </div>
    )
}

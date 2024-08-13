import React from 'react';

// WithTimestamp : Higher Order Component,  
// WithTimestampComponent: Enhanced Component
// ...props ensures that all props passed to the HOC are also passed to the wrapped component.

export default function WithTimestamp(WrappedComponent) {

    return function WithTimestampComponent(props) {

        const timestamp = new Date().toLocaleTimeString();

        return <WrappedComponent {...props} timestamp={timestamp} />

    }
}

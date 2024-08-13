import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Child from './Child';

export default function ErrorBoundaryExample() {
    return (
        <ErrorBoundary>
            <Child />
        </ErrorBoundary>
    )
}

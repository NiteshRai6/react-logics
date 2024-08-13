import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Root from './Root';

export default function ReduxToolkit() {
    return (
        <Provider store={store}>
            <Root />
        </Provider>
    )
}

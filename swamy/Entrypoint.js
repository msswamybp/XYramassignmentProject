import { createStore ,applyMiddleware} from 'redux'
import React, { Component } from 'react'

import Stack from './src/navigation'
import { Provider } from 'react-redux'
const intialsatte = {
    counter: 0
}
const reducer = (state = intialsatte, action) => {
    switch (action.type) {
        case 'INCRE':
            return { counter: state.counter + 1 }
        case 'DEC':
            return { counter: state.counter - 1 }
    }
    return state
}
const store = createStore(reducer)
const Entrypoint = () => (
    <Provider store={store}>
        <Stack />
    </Provider>
)
export default Entrypoint
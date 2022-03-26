import React from 'react';
import ReactDom from 'react-dom';
// REDUX
import ReactRedux, {Provider} from 'react-redux'
import {createStore, compose} from 'redux'
import reducer from './reducers'
// ROUTES
import App from './routes/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    "games": [
        
    ]
}

const store = createStore(reducer, initialState, composeEnhancers());

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
)
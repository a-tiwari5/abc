import React from "react";
import reactDom from "react-dom";
import App from "./components/App"
import "./index.css"
import { BrowserRouter } from "react-router-dom"

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import reducers from './reducers'
import reduxThunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
)

reactDom.render(
    <>  
        <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        </Provider>
    </>,
    document.querySelector('#root'))




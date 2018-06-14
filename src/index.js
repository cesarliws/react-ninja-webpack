'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app';

const renderApp = (App) => { 
    const element = (
        <AppContainer>
            <App />
        </AppContainer>
    )

    ReactDOM.render(
        element, 
        // document.getElementById('App')
        document.querySelector('[data-js="app"]')
    )
}

renderApp(App)

if (module.hot){
    module.hot.accept('./app'), () => {
        const App = require('./app').default
        renderApp(App)
    }
}
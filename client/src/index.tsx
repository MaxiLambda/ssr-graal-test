import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server';
import App from './App'
import { StaticRouter } from "react-router-dom/server";
import {BrowserRouter} from "react-router-dom";


const anyWindow: any = window
anyWindow.renderApp = () => {
    ReactDOM.hydrate(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
}
anyWindow.renderAppOnServer = () => {
    return ReactDOMServer.renderToString(<StaticRouter location={anyWindow.requestUrl}><App /></StaticRouter>)
}
import './index.css'

import React from 'react'
import ReactDOMServer from 'react-dom/server';
import App from './App'
import {StaticRouter} from "react-router-dom/server";
import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";


const anyWindow: any = window
anyWindow.renderApp = () => {
    createRoot(document.getElementById('root') as HTMLElement)
        .render(<BrowserRouter><App /></BrowserRouter>)
}
anyWindow.renderAppOnServer = () => {
    return ReactDOMServer.renderToString(<StaticRouter location={anyWindow.requestUrl}><App /></StaticRouter>)
}
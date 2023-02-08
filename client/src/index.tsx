import './index.css'

import React from 'react'
import ReactDOMServer from 'react-dom/server';
import App from './App'
import {StaticRouter} from "react-router-dom/server";
import {BrowserRouter} from "react-router-dom";
import {hydrateRoot} from "react-dom/client";
import {hydrate} from "react-dom";


const anyWindow: any = window
anyWindow.renderApp = () => {
    console.log("sdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss")
    hydrateRoot(document.getElementById('root') as HTMLElement,<BrowserRouter><App /></BrowserRouter>)

}
anyWindow.renderAppOnServer = () => {
    return ReactDOMServer.renderToString(<StaticRouter location={anyWindow.requestUrl}><App /></StaticRouter>)
}
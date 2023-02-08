import logo from "./logo.svg";
import React, {useEffect} from "react";
import {coffee} from "./java";
import {Link} from "react-router-dom";

export const Moin = () => {
    useEffect(() => console.log("asdasdasdasd"))

    return (<>
        <Link to={"/r/hello"} >r/hello</Link>
        <p>Hhhhhhhhhhhhhhhhhhhhhhhhhhaaaaa + {coffee}</p>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.pspppptsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
        </>);
};
import React from 'react';
import './App.css';
import {Moin} from "./Moin";
import {Route, Routes} from "react-router";


function App() {
  return (
      <Routes>
          <Route index element={<Moin/>}/>
          <Route path = {"/r/hello"} element={<div>hello</div>}/>
      </Routes>
  );
}

export default App;

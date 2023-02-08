import React from 'react';
import './App.css';
import {Moin} from "./Moin";
import {Route, Routes} from "react-router";
import {NotMoin} from "./r/NotMoin";


function App() {
  return (
      <Routes>
          <Route index element={<Moin/>}/>
          <Route path = {"/r/hello"} element={<NotMoin />}/>
      </Routes>
  );
}

export default App;

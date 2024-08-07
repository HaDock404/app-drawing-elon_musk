import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
// remplacement de BrowserRouter par HashRouter pour l'utilisation de github page

import Elon from './components/Elon.jsx'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
      <Routes>
        <Route path="/" element={<Elon />}/>
      </Routes>
  </HashRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
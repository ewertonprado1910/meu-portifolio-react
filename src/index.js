import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import Router from "./routes/routes"

import GlobalStyle from "./globalStyles"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Router />
    <GlobalStyle />
  </BrowserRouter>
);



import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import './theme/global.scss';

// import XApp from "../.structure.jsx";

// console.log(XApp);

import "./generate-code/generate-logic";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

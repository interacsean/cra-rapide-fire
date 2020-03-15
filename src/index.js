import React from "react";
import ReactDOM from "react-dom";
import Editor from './components/Editor'

// import "./generate-code/generate-logic";
import './theme/global.scss';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Editor />
  </React.StrictMode>,
  rootElement
);

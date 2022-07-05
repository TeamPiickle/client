import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

import App from "./App";
// import { worker } from "./mocks/browser";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  } 
  html {
    font-family: sans-serif;
    font-size: 62.5%;
    letter-spacing: -0.03rem;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  input, button {
    outline: none; 
    border: none;
    background-color: transparent;
  }
  button {
    padding: 0;
    cursor: pointer;
  }
  input {
    -webkit-appearance: none; /* Safari and Chrome */
    -moz-appearance: none; /* Firefox */
    appearance: none;
    
    &:focus {
      outline: none;
    }
  }
`;

// if (process.env.NODE_ENV === "development") {
//   worker.start();
// }

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);

import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  } 
  html {
    letter-spacing: -0.03rem;
    font-family: sans-serif;
    font-size: 62.5%;
    user-select: none;
  }
  ul, li {
    list-style: none;
    padding-left:0px;
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
    cursor: pointer;
    padding: 0;
  }
  input {
    appearance: none;
    
    &:focus {
      outline: none;
    }
  }
`;

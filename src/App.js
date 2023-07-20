import React from "react";
import Api from "./components/Api";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
    
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
    background-color:#FFE7D1;
  }

  button {
    cursor: pointer;
  }

`;

export default class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Api />
      </>
    );
  }
}

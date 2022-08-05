import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { GlobalStyle } from "./style/globalStyle";
import theme from "./style/theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
);

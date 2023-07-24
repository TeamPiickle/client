import React from "react";
import ReactDOM from "react-dom/client";
import TagManager from "react-gtm-module";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { SWRConfig } from "swr";

import ToastProvider from "./@components/@common/Toast/ToastProvider";
import App from "./App";
import { GlobalStyle } from "./style/globalStyle";
import theme from "./style/theme";

const tagManagerArgs = {
  gtmId: "GTM-KG6PFHT",
};
TagManager.initialize(tagManagerArgs);

const globalSWRConfig = { revalidateOnFocus: false };

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <SWRConfig value={globalSWRConfig}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </SWRConfig>
    </RecoilRoot>
  </React.StrictMode>,
);

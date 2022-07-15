import { createGlobalStyle } from "styled-components";

export const ModalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
  body * {
    touch-action: none;
  }
`;

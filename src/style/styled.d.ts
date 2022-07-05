import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      orange000: string;
    };
    fonts: {
      h1: SerializedStyles;
    };
  }
}

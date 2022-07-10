import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      green: string;
      sub_green: string;
      sub_green1: string;
      sub_green2: string;
      white: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      bg: string;
      sub1: string;
      sub3: string;
      sub4: string;
      sub5: string;
      a: string;
    };
    fonts: {
      h1: SerializedStyles;
      h2: SerializedStyles;
      body1: SerializedStyles;
      body2: SerializedStyles;
      caption1: SerializedStyles;
      caption2: SerializedStyles;
      caption3: SerializedStyles;
      btn1: SerializedStyles;
      btn2: SerializedStyles;
      btn3: SerializedStyles;
    };
  }
}

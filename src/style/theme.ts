import { css, DefaultTheme } from "styled-components";

const colors = {
  orange000: "#FF3D00",
};

interface Font {
  weight: 400 | 500 | 600 | 700 | 800;
  size: number;
  height: "default" | "long";
  spacing: "default" | "close";
}

interface TempFont extends Omit<Font, "height"> {
  height: number;
}

const fontHeight = {
  default: 1.3,
  long: 1.5,
} as const;

const fontSpacing = {
  default: -0.1,
  close: -0.07,
} as const;

function FONT({ weight, size, height, spacing }: Font | TempFont) {
  return css`
    line-height: ${typeof height === "number" ? height : fontHeight[height]};
    letter-spacing: ${fontSpacing[spacing]}rem;
    font-family: Pretendard;
    font-size: ${size}rem;
    font-weight: ${weight};
  `;
}

const fonts = {
  h1: FONT({ weight: 800, size: 3, height: "default", spacing: "default" }),
};

const theme: DefaultTheme = {
  colors,
  fonts,
};

export default theme;

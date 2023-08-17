import { css, CSSProp } from "styled-components";

const colors = {
  red: "#FF0000",
  green: "#19BE7E",
  sub_green: "#DBFFF1",
  sub_green1: "#7DE0B9",
  sub_green2: "#B5F2DB",
  sub_green3: "#DBFFF1",
  sub_green4: "rgba(181, 242, 219, 0.7)",
  sub_green5: "#EEF5F3",
  bg: "#2A2A2A",
  black: "#000000",
  white: "#FFFFFF",
  gray100: "#F1F1F1",
  gray200: "#E0E0E0",
  gray300: "#D0D0D0",
  gray400: "#A0A0A0",
  gray500: "#808080",
  gray600: "#606060",
  gray700: "#404040",
  gray800: "#424242",
  gray900: "#0A0A0A",
  caption2_color: "#575757",
  darkblue: "#100E34",
  sub1: "#F2F25A",
  sub3: "#706E2B",
  sub4: "#F2EFCE",
  sub5: "#1B3303",
  a: "radial-gradient(50% 50% at 50% 50%, #F2F25A 0%, rgba(25, 190, 126, 0.51) 100%)",
  card: "linear-gradient(180deg, #DBFFF1 0%, #FFFFEB 100%);",
} as const;

const newColors = {
  gray100: "#F5F5F5",
  gray200: "#EDEDED",
  gray300: "#E0E0E0",
  gray400: "#C2C2C2",
  gray500: "#9E9E9E",
  gray600: "#757575",
  gray700: "#616161",
  gray800: "#424242",
  gray900: "#0A0A0A",
  green: "#19BE7E",
  purple: "#4F48EC",
  darkblue: "#100E34",
  lightgreen1: "#7DE0B9",
  lightgreen2: "#F2FFF6",
  pastelgreen: "#DBFFF1",
  white: "#FFFFFF",
  black: "#000000",
  black50: "rgba(0, 0, 0, 0.5)",
  blackblur: "rgba(0, 0, 0, 0.60)",
  kakaoyellow: "#FEE500",
  navergreen: "#03C75A",
  gradation: "linear-gradient(180deg, #DBFFF1 0%, #FFFFEB 100%);",
} as const;

interface Font {
  weight: 300 | 400 | 500 | 600 | 700;
  size: number;
  lineHeight: number;
  letterSpacing: number;
  notoSans?: boolean;
}

function FONT({ weight, size, lineHeight, letterSpacing, notoSans }: Font): string {
  return `
    font-family: ${notoSans ? "Noto Sans" : "Pretendard"};
    font-weight: ${weight};
    font-size: ${size}rem;
    line-height: ${lineHeight}%;
    letter-spacing: -0.0${letterSpacing}rem;
  `;
}

const fonts = {
  h1: FONT({ weight: 600, size: 2.6, lineHeight: 140, letterSpacing: 4 }),
  h2: FONT({ weight: 400, size: 1.4, lineHeight: 140, letterSpacing: 4 }),
  body1: FONT({ weight: 600, size: 1.6, lineHeight: 140, letterSpacing: 3 }),
  body2: FONT({ weight: 400, size: 2.4, lineHeight: 140, letterSpacing: 4 }),
  body3: FONT({ weight: 700, size: 1.5, lineHeight: 140, letterSpacing: 3 }),
  body4: FONT({ weight: 400, size: 1.2, lineHeight: 140, letterSpacing: 3 }),
  body5: FONT({ weight: 700, size: 2.4, lineHeight: 140, letterSpacing: 4 }),
  body6: FONT({ weight: 400, size: 1.4, lineHeight: 140, letterSpacing: 3 }),
  body7: FONT({ weight: 500, size: 1.6, lineHeight: 140, letterSpacing: 4 }),
  body8: FONT({ weight: 400, size: 2, lineHeight: 140, letterSpacing: 4, notoSans: true }),
  body9: FONT({ weight: 600, size: 2, lineHeight: 130, letterSpacing: 3 }),
  body10: FONT({ weight: 600, size: 2.4, lineHeight: 130, letterSpacing: 4 }),
  body11: FONT({ weight: 400, size: 1.5, lineHeight: 140, letterSpacing: 4 }),
  body12: FONT({ weight: 400, size: 1.6, lineHeight: 140, letterSpacing: 4 }),
  caption1: FONT({ weight: 400, size: 1, lineHeight: 80, letterSpacing: 4 }),
  caption2: FONT({ weight: 500, size: 1, lineHeight: 130, letterSpacing: 4 }),
  caption3: FONT({ weight: 400, size: 1.2, lineHeight: 140, letterSpacing: 4 }),
  caption4: FONT({ weight: 400, size: 1.2, lineHeight: 140, letterSpacing: 3 }),
  caption5: FONT({ weight: 400, size: 1.1, lineHeight: 140, letterSpacing: 4 }),
  caption05: FONT({ weight: 700, size: 1.2, lineHeight: 140, letterSpacing: 4 }),
  btn1: FONT({ weight: 400, size: 1.2, lineHeight: 140, letterSpacing: 3 }),
  btn2: FONT({ weight: 400, size: 1.4, lineHeight: 130, letterSpacing: 4 }),
  btn3: FONT({ weight: 300, size: 1.6, lineHeight: 140, letterSpacing: 4 }),
  btn4: FONT({ weight: 300, size: 1, lineHeight: 140, letterSpacing: 4 }),
  footer1: FONT({ weight: 600, size: 1.2, lineHeight: 140, letterSpacing: 4 }),
  footer2: FONT({ weight: 400, size: 1.2, lineHeight: 140, letterSpacing: 4 }),
  cardBody5: FONT({ weight: 700, size: 2.3, lineHeight: 140, letterSpacing: 4 }),
} as const;

const newFonts = {
  h1: FONT({ weight: 600, size: 2.0, lineHeight: 140, letterSpacing: 3 }),
  h2: FONT({ weight: 400, size: 1.4, lineHeight: 140, letterSpacing: 3 }),
  body1: FONT({ weight: 600, size: 2.4, lineHeight: 130, letterSpacing: 3 }),
  body2: FONT({ weight: 600, size: 2.0, lineHeight: 130, letterSpacing: 2 }),
  body3: FONT({ weight: 500, size: 1.8, lineHeight: 120, letterSpacing: 35 }),
  body4: FONT({ weight: 400, size: 1.4, lineHeight: 130, letterSpacing: 4 }),
  btn1: FONT({ weight: 500, size: 1.4, lineHeight: 140, letterSpacing: 4 }),
  btn2: FONT({ weight: 400, size: 1.2, lineHeight: 140, letterSpacing: 4 }),
  caption1: FONT({ weight: 300, size: 1.2, lineHeight: 140, letterSpacing: 3 }),
  caption2: FONT({ weight: 400, size: 1.0, lineHeight: 140, letterSpacing: 4 }),
  footer1: FONT({ weight: 600, size: 1.4, lineHeight: 140, letterSpacing: 4 }),
  footer2: FONT({ weight: 400, size: 1.4, lineHeight: 130, letterSpacing: 4 }),
  graphic1: FONT({ weight: 600, size: 2.6, lineHeight: 130, letterSpacing: 3 }),
  btnsocaillogin: FONT({ weight: 400, size: 1.7, lineHeight: 130, letterSpacing: 3 }),
} as const;

type BackQuoteArgs = string[];

interface Media {
  desktop: (...args: BackQuoteArgs) => CSSProp | undefined;
}

const media: Media = {
  desktop: (...args: BackQuoteArgs) =>
    css`
      @media screen and (min-width: 48rem), screen and (min-height: 48rem) and (orientation: landscape) {
        ${args}
      }
    `,
};

const theme = {
  colors,
  newColors,
  fonts,
  newFonts,
  media,
} as const;

export default theme;

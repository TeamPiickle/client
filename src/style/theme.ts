const colors = {
  red: "#FF0000",
  green: "#19BE7E",
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
  gray800: "#202020",
  caption2_color: "#575757",
  sub1: "#F2F25A",
  sub3: "#706E2B",
  sub4: "#F2EFCE",
  sub5: "#1B3303",
  a: "radial-gradient(50% 50% at 50% 50%, #F2F25A 0%, rgba(25, 190, 126, 0.51) 100%)",
  card: "linear-gradient(180deg, #DBFFF1 0%, #FFFFEB 100%);",
} as const;

interface Font {
  weight: 300 | 400 | 500 | 600 | 700;
  size: number;
  lineHeight: number;
  notoSans?: boolean;
}

function FONT({ weight, size, lineHeight, notoSans }: Font): string {
  return `
    font-family: ${notoSans ? "Noto Sans" : "Pretendard"};
    font-weight: ${weight};
    font-size: ${size}rem;
    line-height: ${lineHeight}%;
    letter-spacing: -0.04rem;
  `;
}

const fonts = {
  h1: FONT({ weight: 600, size: 2, lineHeight: 130 }),
  h2: FONT({ weight: 400, size: 1.2, lineHeight: 140 }),
  body1: FONT({ weight: 600, size: 1.6, lineHeight: 140 }),
  body2: FONT({ weight: 700, size: 2.4, lineHeight: 140 }),
  body3: FONT({ weight: 600, size: 1.5, lineHeight: 140 }),
  body4: FONT({ weight: 400, size: 1.2, lineHeight: 140 }),
  body5: FONT({ weight: 700, size: 2.4, lineHeight: 140 }),
  body6: FONT({ weight: 400, size: 1.4, lineHeight: 140 }),
  body7: FONT({ weight: 500, size: 1.6, lineHeight: 140 }),
  body8: FONT({ weight: 400, size: 1.2, lineHeight: 140, notoSans: true }),
  body9: FONT({ weight: 600, size: 2, lineHeight: 130 }),
  body10: FONT({ weight: 600, size: 2.4, lineHeight: 130 }),
  body11: FONT({ weight: 400, size: 1.5, lineHeight: 140 }),
  body12: FONT({ weight: 400, size: 1.6, lineHeight: 140 }),
  caption1: FONT({ weight: 400, size: 1, lineHeight: 80 }),
  caption2: FONT({ weight: 400, size: 1, lineHeight: 130 }),
  caption3: FONT({ weight: 400, size: 1.2, lineHeight: 140 }),
  caption4: FONT({ weight: 400, size: 1.2, lineHeight: 140 }),
  caption5: FONT({ weight: 400, size: 1.1, lineHeight: 140 }),
  btn1: FONT({ weight: 400, size: 1.4, lineHeight: 140 }),
  btn2: FONT({ weight: 400, size: 1.2, lineHeight: 130 }),
  btn3: FONT({ weight: 300, size: 1.6, lineHeight: 140 }),
  btn4: FONT({ weight: 300, size: 1, lineHeight: 140 }),
  footer1: FONT({ weight: 600, size: 1.2, lineHeight: 140 }),
  footer2: FONT({ weight: 400, size: 1.2, lineHeight: 140 }),
} as const;

const theme = {
  colors,
  fonts,
} as const;

export default theme;

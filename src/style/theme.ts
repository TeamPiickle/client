const colors = {
  green: "#19BE7E",
  sub_green: "#DBFFF1",
  sub_green1: "#B5F2DB",
  sub_green2: "#7DE0B9",
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
  bg: "#2A2A2A",
  sub1: "#F2F25A",
  sub3: "#706E2B",
  sub4: "#F2EFCE",
  sub5: "#1B3303",
  a: "radial-gradient(50% 50% at 50% 50%, #F2F25A 0%, rgba(25, 190, 126, 0.51) 100%)",
  card: "linear-gradient(180deg, #DBFFF1 0%, #FFFFEB 100%);",
} as const;

interface Font {
  weight: 400 | 500 | 600 | 700;
  size: number;
}

function FONT({ weight, size }: Font): string {
  return `
    font-family: "Pretendard";
    font-weight: ${weight};
    font-size: ${size}rem;
    line-height: 140%;
    letter-spacing: -0.04rem;
  `;
}

const fonts = {
  h1: FONT({ weight: 700, size: 2.5 }),
  h2: FONT({ weight: 400, size: 1.4 }),
  body1: FONT({ weight: 600, size: 2 }),
  body2: FONT({ weight: 400, size: 1.2 }),
  body3: FONT({ weight: 700, size: 2.4 }),
  caption1: FONT({ weight: 600, size: 1.6 }),
  caption2: FONT({ weight: 500, size: 1.6 }),
  caption3: FONT({ weight: 500, size: 1 }),
  btn1: FONT({ weight: 500, size: 1.6 }),
  btn2: FONT({ weight: 400, size: 1.4 }),
  btn3: FONT({ weight: 400, size: 1.2 }),
} as const;

const theme = {
  colors,
  fonts,
} as const;

export default theme;

import { createTheme } from "@shopify/restyle";

const palette = {
  black: "#000",
  white: "#fff",
  yellow: "#F4B657",
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.black,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontSize: 34,
      fontWeight: "bold",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {},
  },
});

export type Theme = typeof theme;
export default theme;

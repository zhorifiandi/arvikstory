import { extendTheme } from "@chakra-ui/react";

const customTheme = {
  fonts: {
    body: "Prata, serif",
    heading: "Tangerine, cursive",
    mono: "Average, monospace",
  },
  colors: {
    gold: "#C49666",
  },
};

const theme = extendTheme(customTheme);

export default theme;

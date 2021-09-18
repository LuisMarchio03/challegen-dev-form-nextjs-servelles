import { theme } from "@chakra-ui/theme";

const customTheme = {
  ...theme,
  fonts: {
    body: "Roboto, system-ui, sans-serif",
    heading: "Roboto, system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: ".313rem",
    md: ".5rem",
  },
  fontSizes: {
    ...theme.fontSizes,
    "2xl": "3.375rem",
  },
  colors: {
    ...theme.colors,
    white: "#dadada",
    purple: {
      ...theme.colors.purple,
    },
    gray: {
      ...theme.colors.gray,
    },
  },
};

export default customTheme;

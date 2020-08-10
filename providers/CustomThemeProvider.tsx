import React, { FC } from "react";
import { ThemeProvider } from "react-native-elements";

// export const theme = {
//   main: "#673AB7",
//   primary: "#673AB7",
//   secondary: "#3BB8A7"
// };

export const theme = {
  colors: {
    primary: "#8e24aa",
    divider: "rgba(59, 59, 59, 0.8)",
    secondary: "#2485AB",
    grey0: "rgba(0, 0, 1, 1)",
    grey1: "rgba(0, 0, 1, 0.8)",
    grey2: "rgba(51, 51, 51, 1)",
    grey3: "rgba(51, 51, 51, 0.8)",
    grey4: "rgba(59, 59, 59, 1)",
    grey5: "rgba(59, 59, 59, 0.8)",
    greyOutline: "rgba(59, 59, 59, 0.8)",
    searchBg: "rgba(59, 59, 59, 0.8)",
    success: "#28a745",
    error: "#dc3545",
    warning: "#ffc107"
  },
  Text: {
    h4Style: {
      fontSize: 16,
      fontWeight: "bold"
    }
  }
} as const;
// ______________________________________________________
//
type AppTheme = typeof theme;
// ______________________________________________________
//
declare module "styled-components" {
  interface DefaultTheme extends AppTheme {}
}
export const CustomThemeProvider: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

import React, { FC } from "react";
import { ThemeProvider } from "react-native-elements";

const theme = {
  colors: {
    primary: "purple",
    divider: "rgba(59, 59, 59, 0.8)",
    secondary: "pink",
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
  }
};

export const CustomThemeProvider: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

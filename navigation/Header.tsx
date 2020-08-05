import { Header } from "react-native-elements";

import React, { FC } from "react";

export const CustomHeader: FC<{ title: string }> = ({ title }) => {
  return (
    <Header
      leftComponent={{ icon: "menu", color: "#fff" }}
      centerComponent={{ text: title, style: { color: "#fff" } }}
      rightComponent={{ icon: "home", color: "#fff" }}
    />
  );
};

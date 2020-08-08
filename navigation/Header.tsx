import { Header } from "react-native-elements";

import React, { FC } from "react";

export const CustomHeader: FC<{ title: string }> = ({ title }) => {
  return (
    <Header
      placement="left"
      leftComponent={{ icon: "menu", color: "#fff" }}
      centerComponent={{ text: title, style: { color: "#fff" } }}
      rightComponent={{ icon: "home", color: "#fff" }}
    />
  );
};

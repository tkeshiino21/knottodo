import styled from "styled-components/native";
import React from "react";
import { RoundImage } from "../ui/RoundImage";
import { Text } from "react-native-elements";
import { Box } from "../ui/Box";

const Logo = () => {
  return (
    <Box style={{ display: "inline-flex", alignItems: "center" }}>
      <RoundImage source={require("../assets/images/shakespeare.png")} />
      <Box ml={8} />
      <Text h4 style={{ color: "white", letterSpacing: 3 }}>
        KnotTodo
      </Text>
    </Box>
  );
};

export default Logo;

import styled from "styled-components/native";
import React from "react";
import { RoundImage } from "../ui/RoundImage";
import { Text } from "react-native-elements";
import { Box } from "../ui/Box";

const Logo = () => {
  return (
    <Box flex>
      <RoundImage source={require("../assets/images/shakespeare.png")} />
      <Box ml={8} />
      <Text h3 style={{ color: "white" }}>
        KnotTodo
      </Text>
    </Box>
  );
};

export default Logo;

import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Container, Title, Caption, RoundImage } from "../ui";
import { Button } from "react-native-elements";
import { Image } from "react-native";

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <RoundImage source={require("../assets/images/shakespeare.png")} />
      <Title>Todo or KnotTodo, this is a problem</Title>
      <Caption>TodoかKnotTodoか、それが問題だ</Caption>
      <Button
        title=" Go to home screen!"
        onPress={() => navigation.replace("Root")}
        type="clear"
      />
    </Container>
  );
};

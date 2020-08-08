import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Container, Title, Caption, RoundImage } from "../components/atoms";
import { Button, Image } from "react-native-elements";

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Image
        source={require("../assets/images/shakespeare.png")}
        ImageComponent={RoundImage}
      />
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

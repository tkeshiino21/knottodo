import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Container, Title } from "../components/atoms";
import { Button } from "react-native-elements";

export const NotFoundScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Title>This screen doesn't exist.</Title>
      <Button
        title=" Go to home screen!"
        onPress={() => navigation.push("Root")}
        type="clear"
      />
    </Container>
  );
};

import React, { FC } from "react";
import { Container } from "../ui/Container";
import { Text, Button } from "react-native-elements";
import { GestureResponderEvent } from "react-native";

type ErrorMessage = {
  navigation: (e: GestureResponderEvent) => void | undefined;
};

export const ErrorMessage: FC<ErrorMessage> = ({ navigation }) => {
  return (
    <Container>
      <Text>エラー</Text>
      <Button title="Go to home screen!" onPress={navigation} type="clear" />
    </Container>
  );
};

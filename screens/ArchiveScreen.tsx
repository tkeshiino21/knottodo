import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Image, View } from "react-native";
import { Button, Text, Card, CheckBox } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import { Container, Title } from "../ui";

export const ArchiveScreen = () => {
  const [checked, setChecked] = useState(true);
  return (
    <Container>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Hey!" />
      <Text h1>Heading 1</Text>
      <Card title="CARD WITH DIVIDER">
        <Container>
          <Title>plese, don't put your hand</Title>
        </Container>
      </Card>

      <CheckBox
        title="Click Here"
        checked={checked}
        size={40}
        center
        iconRight
        checkedIcon={
          <FontAwesome name="check-circle-o" size={24} color="black" />
        }
        uncheckedIcon={<FontAwesome name="circle-o" size={24} color="black" />}
        onPress={() => setChecked(!checked)}
      />
    </Container>
  );
};

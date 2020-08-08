import React, { useState } from "react";
import { StyleSheet } from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { Image, View } from "react-native";
import {
  Button,
  ThemeProvider,
  Text,
  Card,
  ListItem,
  Icon,
} from "react-native-elements";
import { CheckBox } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

export const TabThreeScreen = () => {
  const users = [
    {
      name: "girl",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
    },
  ];
  const [checked, setChecked] = useState(true);
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Hey!" />
      <Text h1>Heading 1</Text>
      <Card title="CARD WITH DIVIDER">
        {users.map((u, i) => {
          return (
            <View key={i} style={styles.container}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: u.avatar }}
              />
              <Text style={styles.title}>{u.name}</Text>
            </View>
          );
        })}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 40,
    height: 60,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

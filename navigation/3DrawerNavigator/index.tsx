import React from "react";
import { Button, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { TabNavigator } from "../2TabNavigator";
import { HomeScreen } from "../../screens/HomeScreen";

const NotificationsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>No New Notifications!</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};

const Details = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>TabA Details here!</Text>
      <Button
        onPress={() => navigation.navigate("Home")}
        title="Go back home"
      />
    </View>
  );
};

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerPosition="right">
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Details" component={Details} />
      <Drawer.Screen name="Hello" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
};

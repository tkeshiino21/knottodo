import React from "react";
import { Button, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NotificationsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>No New Notifications!</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};

const TabADetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to TabA page!</Text>
      <Button
        onPress={() => navigation.navigate("TabA Details")}
        title="Go to TabA Details"
      />
    </View>
  );
};

function Details() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>TabA Details here!</Text>
    </View>
  );
}

function TabBScreen() {
  return (
    <View>
      <Text style={{ textAlign: "center", marginTop: 300 }}>
        Welcome to TabB page!
      </Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

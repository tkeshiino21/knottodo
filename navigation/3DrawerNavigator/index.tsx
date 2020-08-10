import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { TabNavigator } from "../2TabNavigator";
import { HomeScreen } from "../../screens/HomeScreen";
import { Button, Text, ThemeContext, Colors } from "react-native-elements";
import { Container } from "../../ui/Container";

const NotificationsScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Text>No New Notifications!</Text>
      <Button
        onPress={() => navigation.navigate("Home")}
        title="Go back home"
      />
    </Container>
  );
};

const Details = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Text>TabA Details here!</Text>
      <Button
        onPress={() => navigation.navigate("Home")}
        title="Go back home"
      />
    </Container>
  );
};

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { theme } = useContext(ThemeContext);
  const colors = theme.colors as Colors;

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerPosition="right"
      drawerContentOptions={{
        activeTintColor: colors.primary
      }}
    >
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Details" component={Details} />
      <Drawer.Screen name="Hello" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
};

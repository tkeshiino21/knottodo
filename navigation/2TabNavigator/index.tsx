import { FC } from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext } from "react";
import { TodayScreen } from "../../screens/TodayScreen";
import { Today } from "./Today";
import { NotToday } from "./NotToday";
import { Archive } from "./Archive";
import { ThemeContext, Colors } from "react-native-elements";

const BottomTab = createBottomTabNavigator();

export const TabNavigator = () => {
  const { theme } = useContext(ThemeContext);
  const colors = theme.colors as Colors;

  const TabBarIcon = (props: { name: string }) => {
    return (
      <Ionicons
        size={30}
        color={colors.primary}
        style={{ marginBottom: -3 }}
        {...props}
      />
    );
  };

  return (
    <BottomTab.Navigator
      initialRouteName="Today"
      tabBarOptions={{ activeTintColor: colors.primary }}
    >
      <BottomTab.Screen
        name="Today"
        component={Today}
        options={{
          tabBarIcon: () => <TabBarIcon name="ios-home" />
        }}
      />
      <BottomTab.Screen
        name="NotToday"
        component={NotToday}
        options={{
          tabBarIcon: () => <TabBarIcon name="ios-calendar" />
        }}
      />
      <BottomTab.Screen
        name="Archive"
        component={Archive}
        options={{
          tabBarIcon: () => <TabBarIcon name="ios-archive" />
        }}
      />
    </BottomTab.Navigator>
  );
};

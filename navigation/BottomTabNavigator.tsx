import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext } from "react";
import { BottomTabParamList } from "../types";
import { TabOneNavigator } from "./Tab/TodayNavigator";
import { TabTwoNavigator } from "./Tab/TabTwoNavigator";
import { TabThreeNavigator } from "./Tab/TabThreeNavigator";
import {
  ThemeContext,
  FullTheme,
  ThemeProps,
  Colors
} from "react-native-elements";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator = () => {
  const { theme } = useContext(ThemeContext);
  const colors = theme.colors as Colors;

  return (
    <BottomTab.Navigator
      initialRouteName="Today"
      tabBarOptions={{ activeTintColor: colors.primary }}
    >
      <BottomTab.Screen
        name="Today"
        component={TabOneNavigator}
        options={{
          tabBarIcon: () => (
            <TabBarIcon name="ios-home" color={colors.primary} />
          )
        }}
      />
      <BottomTab.Screen
        name="NotToday"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: () => (
            <TabBarIcon name="ios-calendar" color={colors.primary} />
          )
        }}
      />
      <BottomTab.Screen
        name="Archive"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: () => (
            <TabBarIcon name="ios-archive" color={colors.primary} />
          )
        }}
      />
    </BottomTab.Navigator>
  );
};

const TabBarIcon = (props: { name: string; color: string }) => {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
};

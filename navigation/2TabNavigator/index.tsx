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

  return (
    <BottomTab.Navigator
      initialRouteName="Today"
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.grey5
      }}
    >
      <BottomTab.Screen
        name="Today"
        component={Today}
        options={{
          tabBarLabel: "Today",
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="ios-today" color={color} size={size} />
          )
        }}
      />
      <BottomTab.Screen
        name="NotToday"
        component={NotToday}
        options={{
          tabBarLabel: "NotToday",
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="ios-calendar" color={color} size={size} />
          )
        }}
      />
      <BottomTab.Screen
        name="Archive"
        component={Archive}
        options={{
          tabBarLabel: "Archive",
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="ios-archive" color={color} size={size} />
          )
        }}
      />
    </BottomTab.Navigator>
  );
};

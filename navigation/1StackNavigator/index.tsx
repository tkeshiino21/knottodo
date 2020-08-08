import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { TodayScreen, TodoDetailScreen } from "../../screens";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Today" component={TodayScreen} />
      <Stack.Screen name="TodoDetail" component={TodoDetailScreen} />
    </Stack.Navigator>
  );
};
// screenOptions={{ headerShown: false }}

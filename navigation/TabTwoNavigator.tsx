import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { TabTwoScreen } from "../screens/TabTwoScreen";
import { TabTwoParamList } from "../types";

export const TabTwoNavigator = () => {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Someday" }}
      />
    </TabTwoStack.Navigator>
  );
};

const TabTwoStack = createStackNavigator<TabTwoParamList>();

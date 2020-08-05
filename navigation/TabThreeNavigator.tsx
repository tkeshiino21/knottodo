import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { TabThreeScreen } from "../screens/TabThreeScreen";
import { TabThreeParamList } from "../types";

export const TabThreeNavigator = () => {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{ headerTitle: "Archive" }}
      />
    </TabTwoStack.Navigator>
  );
};

const TabTwoStack = createStackNavigator<TabThreeParamList>();

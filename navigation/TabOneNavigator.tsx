import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { TabOneScreen } from "../screens/TabOneScreen";
import { TabOneParamList } from "../types";
import { CustomHeader } from "./Header";

export const TabOneNavigator = () => {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{
          header: () => CustomHeader({ title: "hello" }),
          headerTitle: "Today",
        }}
      />
    </TabOneStack.Navigator>
  );
};

const TabOneStack = createStackNavigator<TabOneParamList>();

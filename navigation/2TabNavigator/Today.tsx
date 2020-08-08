import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { TodayScreen } from "../../screens/TodayScreen";
import { TabOneParamList } from "../types";
import { CustomHeader } from "../CustomHeader";

const TabOneStack = createStackNavigator<TabOneParamList>();

export const Today = () => {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Today"
        component={TodayScreen}
        options={{
          header: () => CustomHeader({ title: "hello" })
        }}
      />
    </TabOneStack.Navigator>
  );
};

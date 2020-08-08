import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { TodayScreen } from "../../screens/TodayScreen";
import { TabOneParamList } from "../types";
import { CustomHeader } from "../CustomHeader";
import { StackNavigator } from "../1StackNavigator/index";

const TabOneStack = createStackNavigator<TabOneParamList>();

export const Today = () => {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Today"
        component={StackNavigator}
        options={{
          header: () => <CustomHeader title="KnotTodo" />
        }}
      />
    </TabOneStack.Navigator>
  );
};

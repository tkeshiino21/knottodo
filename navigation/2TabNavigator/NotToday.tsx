import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { NotTodayScreen } from "../../screens/NotTodayScreen";
import { TabTwoParamList } from "../types";
import { CustomHeader } from "../CustomHeader";

const TabTwoStack = createStackNavigator<TabTwoParamList>();

export const NotToday = () => {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="NotToday"
        component={NotTodayScreen}
        options={{ header: () => <CustomHeader title="KnotTodo" /> }}
      />
    </TabTwoStack.Navigator>
  );
};

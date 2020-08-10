import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { NotTodayScreen } from "../../screens/NotTodayScreen";
import { TabTwoParamList } from "../types";
import { CustomHeader } from "../CustomHeader";
import { TodoDetailScreen } from "../../screens/TodoDetailScreen";

const TabTwoStack = createStackNavigator();

export const NotToday = () => {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="NotToday"
        component={NotTodayScreen}
        options={{ header: () => <CustomHeader title="KnotTodo" /> }}
      />
      <TabTwoStack.Screen
        name="TodoDetail"
        component={TodoDetailScreen}
        options={{
          header: () => <CustomHeader title="KnotTodo" />
        }}
      />
    </TabTwoStack.Navigator>
  );
};

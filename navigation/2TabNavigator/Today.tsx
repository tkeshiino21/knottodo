import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { CustomHeader } from "../CustomHeader";
import { TodoDetailScreen } from "../../screens/TodoDetailScreen";

const TabOneStack = createStackNavigator();

export const Today = () => {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Today"
        component={Today}
        options={{
          header: () => <CustomHeader title="KnotTodo" />
        }}
      />
      <TabOneStack.Screen
        name="TodoDetail"
        component={TodoDetailScreen}
        options={{
          header: () => <CustomHeader title="KnotTodo" />
        }}
      />
    </TabOneStack.Navigator>
  );
};

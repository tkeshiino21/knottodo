import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ArchiveScreen } from "../../screens/ArchiveScreen";
import { CustomHeader } from "../CustomHeader";
import { TodoDetailScreen } from "../../screens/TodoDetailScreen";

const TabTwoStack = createStackNavigator();

export const Archive = () => {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Archive"
        component={ArchiveScreen}
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
